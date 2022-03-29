import { useEffect, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { kebabCase } from 'lodash'
import { useWeb3React } from '@web3-react/core'
import { Toast, toastTypes } from '@pancakeswap-libs/uikit'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { Team } from 'config/constants/types'
import { getWeb3NoAccount } from 'utils/web3'
import { getAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import useRefresh from 'hooks/useRefresh'
import {
  fetchFarmsPublicDataAsync,
  fetchPoolsUserDataAsync,
  push as pushToast,
  remove as removeToast,
  clear as clearToast,
  setBlock,
} from './actions'
import { State, Farm, Pool, ProfileState, TeamsState, AchievementState, PriceState } from './types'
import { fetchProfile } from './profile'
import { fetchTeam, fetchTeams } from './teams'
import { fetchAchievements } from './achievements'
import { fetchPrices } from './prices'

declare const window: any

export const useFetchPublicData = () => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    fetch('https://bsctools.xyz/bhc/api/bhc_lp_calc.php')
      .then((res) => res.text())
      .then((body) => {
        fetch('https://bsctools.xyz/bhc/api/bhc_price.php')
          .then((res1) => res1.text())
          .then((body1) => {
            window.prices = {
              '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4': JSON.parse(body1).bhc_pancakeswap,
              '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D': JSON.parse(body1).pcs_hps,
              '0xcaC3b7DE7D5c44E8E1048241C7dE29a61b5C3E7d': JSON.parse(body).juls_hpsbnb_one_lp_value,
              '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47': JSON.parse(body1).ada,
              '0x4437743ac02957068995c48E08465E0EE1769fBE': JSON.parse(body1).fts,
              '0x790Be81C3cA0e53974bE2688cDb954732C9862e1': JSON.parse(body1).brew,
              '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0': JSON.parse(body1).axs,
              '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340': JSON.parse(body1).bmon,
              '0xfb62ae373aca027177d1c18ee0862817f9080d08': JSON.parse(body1).dpet,
              '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': JSON.parse(body1).bnb,
              '0x9573c88aE3e37508f87649f87c4dd5373C9F31e0': JSON.parse(body1).moni,
              '0x851db01b337ee3e5ab161ad04356816f09ea01dc': JSON.parse(body).bhc_pancakeswapbnb_one_lp_value,
              '0xd46E7f33f8788f87D6017074dC4e4d781D3df91E': JSON.parse(body).bhc_streetswapbnb_one_lp_value,
              '0x219686EA455297aa6A052c0d41CEfa0c4784549E': JSON.parse(body).pcs_hpsbnb_one_lp_value,
              '0xe9e7cea3dedca5984780bafc599bd69add087d56': 1,

              '0xE4FAE3Faa8300810C835970b9187c268f55D998F': JSON.parse(body1).cate,
              '0xbA2aE424d960c26247Dd6c32edC70B295c744C43': JSON.parse(body1).doge,
              '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe': JSON.parse(body1).xrp,
              '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c': JSON.parse(body1).btc,
              '0xC3440c10c4F36f354eB591B19FafB4906d449B75': JSON.parse(body1).srkb, // SRKb
              '0x37Ac4D6140e54304D77437A5c11924f61a2D976f': JSON.parse(body1).sfuel, // SFUEL
              '0xADCa52302e0a6c2d5D68EDCdB4Ac75DeB5466884': JSON.parse(body1).gmr, // GMR
              '0x76aECB353AbF596BD61EE6BDb07d70787DeC4FD6': JSON.parse(body1).cure, // CURE
              '0xa19d3f4219e2ed6dc1cb595db20f70b8b6866734': JSON.parse(body1).wirtual, //  WIRTUAL'
            }
          })
      })

    //  dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])

  useEffect(() => {
    const web3 = getWeb3NoAccount()
    const interval = setInterval(async () => {
      const blockNumber = await web3.eth.getBlockNumber()
      dispatch(setBlock(blockNumber))
    }, 6000)

    return () => clearInterval(interval)
  }, [dispatch])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmsTVL = (): number => {
  const farms = useSelector((state: State) => state.farms.data)

  
  let tvl = 0
  for (let i = 0; i < farms.length; i++) {    
    tvl += Number(Number(farms[i].tvlInUSD).toFixed(2))
  }
  return tvl
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
    dualEarnings: farm.userData ? farm.userData.dualEarnings : [new BigNumber(0), new BigNumber(0), new BigNumber(0)],
  }
}

export const useLpTokenPrice = (symbol: string) => {
  const farm = useFarmFromSymbol(symbol)
  const tokenPriceInUsd = useGetApiPrice(getAddress(farm.token.address))

  return farm.lpTotalSupply && farm.lpTotalInQuoteToken
    ? new BigNumber(getBalanceNumber(farm.lpTotalSupply)).div(farm.lpTotalInQuoteToken).times(tokenPriceInUsd).times(2)
    : new BigNumber(0)
}

// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Toasts
export const useToast = () => {
  const dispatch = useAppDispatch()
  const helpers = useMemo(() => {
    const push = (toast: Toast) => dispatch(pushToast(toast))

    return {
      toastError: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.DANGER, title, description })
      },
      toastInfo: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.INFO, title, description })
      },
      toastSuccess: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.SUCCESS, title, description })
      },
      toastWarning: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.WARNING, title, description })
      },
      push,
      remove: (id: string) => dispatch(removeToast(id)),
      clear: () => dispatch(clearToast()),
    }
  }, [dispatch])

  return helpers
}

// Profile

export const useFetchProfile = () => {
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfile(account))
  }, [account, dispatch])
}

export const useProfile = () => {
  const { isInitialized, isLoading, data, hasRegistered }: ProfileState = useSelector((state: State) => state.profile)
  return { profile: data, hasProfile: isInitialized && hasRegistered, isInitialized, isLoading }
}

// Teams

export const useTeam = (id: number) => {
  const team: Team = useSelector((state: State) => state.teams.data[id])
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTeam(id))
  }, [id, dispatch])

  return team
}

export const useTeams = () => {
  const { isInitialized, isLoading, data }: TeamsState = useSelector((state: State) => state.teams)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTeams())
  }, [dispatch])

  return { teams: data, isInitialized, isLoading }
}

// Achievements

export const useFetchAchievements = () => {
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (account) {
      dispatch(fetchAchievements(account))
    }
  }, [account, dispatch])
}

export const useAchievements = () => {
  const achievements: AchievementState['data'] = useSelector((state: State) => state.achievements.data)
  return achievements
}

// Prices
export const useFetchPriceList = () => {
  const { slowRefresh } = useRefresh()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPrices())
  }, [dispatch, slowRefresh])
}

export const useGetApiPrices = () => {
  const prices: PriceState['data'] = useSelector((state: State) => state.prices.data)
  return prices
}

export const useGetApiPrice = (address: string) => {
  const prices = useGetApiPrices()

  if (!prices) {
    return null
  }

  return prices[address.toLowerCase()]
}

export const usePriceCakeBusd = (): BigNumber => {
  return new BigNumber(window.prices['0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4'])
}

export const useBlock = () => {
  return useSelector((state: State) => state.block)
}

export const useInitialBlock = () => {
  return useSelector((state: State) => state.block.initialBlock)
}
