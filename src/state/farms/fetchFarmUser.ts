import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import farmABI from 'config/abi/farm.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/farms'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { Contract } from 'web3-eth-contract'

export const fetchFarmUserAllowances = async (account: string) => {
  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return { address: lpContractAddress, name: 'allowance', params: [account, masterChefAddress] }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string) => {
  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string) => {
  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAddress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(masterchefABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarmUserEarnings = async (account: string) => {
  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAddress,
      name: 'pendingCake',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(masterchefABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}

export const fetchFarmUserAllowancesBHC = async (account: string) => {
  //  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return { address: lpContractAddress, name: 'allowance', params: [account, farm.farmAddress] }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalancesBHC = async (account: string) => {
  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserConstraintBalancesBHC = async (account: string) => {
  const calls = farmsConfig.map((farm) => {
    const balanceCalls = []
    if (farm.balanceCheck) {
      for (let tk = 0; tk < farm.balanceConstraints.length; tk++) {
        balanceCalls.push({
          address: getAddress(farm.balanceConstraints[tk].token.address),
          name: 'balanceOf',
          params: [account],
        })
      }
    }
    return balanceCalls
  })

  /* eslint-disable */

  const tokenBalances = []
  for (let c = 0; c < calls.length; c++) {
    const rawTokenBalances = await multicall(erc20ABI, calls[c])
    const parsedTokenBalances = []
    for (let b = 0; b < rawTokenBalances.length; b++) {
      parsedTokenBalances.push(new BigNumber(rawTokenBalances[b]).toJSON())
    }
    tokenBalances.push(parsedTokenBalances)
  }

  const parsedTokenBalances = tokenBalances.map((tokenBalance) => {
    return tokenBalance
  })
  /* eslint-enable */

  return parsedTokenBalances
}

export const fetchFarmUserStakedBalancesBHC = async (account: string) => {
  // const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: farm.farmAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawStakedBalances = await multicall(farmABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarmUserEarningsBHC = async (account: string) => {
  //  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: farm.farmAddress,
      name: 'earned',
      params: [account],
    }
  })

  const rawEarnings = await multicall(farmABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })

  return parsedEarnings
}

export const fetchFarmUserEarningsBHCDual = async (account: string) => {
  //  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    if (farm.dualEarn) {
      return {
        address: farm.farmAddress,
        name: 'earnedTotal',
        params: [account],
      }
    }
    return {
      address: farm.farmAddress,
      name: 'earned',
      params: [account],
    }
  })

  const rawEarnings = await multicall(farmABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    try {
      // console.log(earnings.total)
      return [
        new BigNumber(Number(earnings.total[0])).toJSON(),
        new BigNumber(Number(earnings.total[1])).toJSON(),
        new BigNumber(Number(earnings.total[2])).toJSON(),
      ]
    } catch (e) {
      return [new BigNumber(0).toJSON(), new BigNumber(0).toJSON(), new BigNumber(0).toJSON()]
    }
  })
  return parsedEarnings
}
