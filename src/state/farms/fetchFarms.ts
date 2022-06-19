import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import farmABI from 'config/abi/farm.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import web3NoAccount from 'utils/web3'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'
// import axios from 'Axios'
declare const window: any
const fetchFarms = async () => {
  const data = await Promise.all(
    farmsConfig.map(async (farmConfig) => {
      const lpAddress = getAddress(farmConfig.lpAddresses)
      const calls = [
        // Balance of token in the LP contract
        {
          address: getAddress(farmConfig.token.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of quote token on LP contract
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: farmConfig.farmAddress,
          name: 'totalSupply',
          // params: [farmConfig.farmAddress], // [getMasterChefAddress()],
        },
        // Total supply of LP tokens
        {
          address: lpAddress,
          name: 'totalSupply',
        },
        // LP decimals
        {
          address: getAddress(farmConfig.lpAddresses),
          name: 'decimals',
        },
        // Token decimals
        {
          address: getAddress(farmConfig.token.address),
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'decimals',
        },
        // Balance of tokens in the master chef contract
        {
          address: getAddress(farmConfig.token.address),
          name: 'balanceOf',
          params: [farmConfig.farmAddress], // [getMasterChefAddress()],
        },
        farmConfig.dualEarn
          ? {
              address: getAddress(farmConfig.token2.address),
              name: 'balanceOf',
              params: [farmConfig.farmAddress], // [getMasterChefAddress()],
            }
          : {
              address: getAddress(farmConfig.token.address),
              name: 'balanceOf',
              params: [farmConfig.farmAddress], // [getMasterChefAddress()],
            },

        farmConfig.dualEarn
          ? {
              address: getAddress(farmConfig.token3.address),
              name: 'balanceOf',
              params: [farmConfig.farmAddress], // [getMasterChefAddress()],
            }
          : {
              address: getAddress(farmConfig.token.address),
              name: 'balanceOf',
              params: [farmConfig.farmAddress], // [getMasterChefAddress()],
            },
      ]

      const farmOnly = [
        {
          address: farmConfig.farmAddress,
          name: 'rewardRate', // [getMasterChefAddress()],
        },
        farmConfig.dualEarn
          ? {
              address: farmConfig.farmAddress,
              name: 'rewardRate2', // [getMasterChefAddress()],
            }
          : {
              address: farmConfig.farmAddress,
              name: 'rewardRate', // [getMasterChefAddress()],
            },
        farmConfig.dualEarn
          ? {
              address: farmConfig.farmAddress,
              name: 'rewardRate3', // [getMasterChefAddress()],
            }
          : {
              address: farmConfig.farmAddress,
              name: 'rewardRate', // [getMasterChefAddress()],
            },
        {
          address: farmConfig.farmAddress,
          name: 'periodFinish', // [getMasterChefAddress()],
        },
      ]

      const [
        tokenBalanceLP,
        quoteTokenBalanceLP,
        lpTokenBalanceMC,
        lpTotalSupply,
        lpDecimals,
        tokenDecimals,
        quoteTokenDecimals,
        rewardsLocked,
        rewardsLocked2,
        rewardsLocked3,
      ] = await multicall(erc20, calls)

      const [rewardRate, rewardRate2, rewardRate3, finishAt] = await multicall(farmABI, farmOnly)
      const rewardsLockedBNB = farmConfig.isBNB
        ? await web3NoAccount.eth.getBalance(farmConfig.farmAddress)
        : new BigNumber(0)

      // Ratio in % a LP tokens that are in staking, vs the total number in circulation
      const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

      // Total value in staking in quote token value
      const lpTotalInQuoteToken = new BigNumber(quoteTokenBalanceLP)
        .div(new BigNumber(10).pow(18))
        .times(new BigNumber(2))
        .times(lpTokenRatio)

      // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
      const tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
      const quoteTokenAmount = new BigNumber(quoteTokenBalanceLP)
        .div(new BigNumber(10).pow(quoteTokenDecimals))
        .times(lpTokenRatio)

      //  added
      const tvlLP = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(lpDecimals))
      const tvlToken =
        getAddress(farmConfig.token.address) === lpAddress
          ? new BigNumber(rewardsLocked - lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals))
          : new BigNumber(rewardsLocked)
              .div(new BigNumber(10).pow(tokenDecimals))
              .plus(new BigNumber(rewardsLockedBNB).div(new BigNumber(10).pow(tokenDecimals)))
      const tvlToken2 = new BigNumber(rewardsLocked2).div(new BigNumber(10).pow(tokenDecimals))
      const tvlToken3 = new BigNumber(rewardsLocked3).div(new BigNumber(10).pow(tokenDecimals))

      const tvlInUSD = new BigNumber(
        tvlLP.multipliedBy(window.prices[lpAddress]),
        // tvlToken.multipliedBy(window.prices[getAddress(farmConfig.token.address)]),
      )
      console.log(farmConfig.farmName, Number(tvlLP))

      /// apr
      const lpInUSD = tvlLP.multipliedBy(window.prices[lpAddress])
      let rrInUSD = new BigNumber(rewardRate)
        .multipliedBy(window.prices[getAddress(farmConfig.token.address)])
        .multipliedBy(3 * 365 * 28800 * 100)
        .div(new BigNumber(10).pow(tokenDecimals))
      if (farmConfig.dualEarn) {
        rrInUSD = rrInUSD.plus(
          new BigNumber(rewardRate2)
            .multipliedBy(window.prices[getAddress(farmConfig.token2.address)])
            .multipliedBy(3 * 365 * 28800 * 100)
            .div(new BigNumber(10).pow(tokenDecimals)),
        )
        rrInUSD = rrInUSD.plus(
          new BigNumber(rewardRate3)
            .multipliedBy(window.prices[getAddress(farmConfig.token3.address)])
            .multipliedBy(3 * 365 * 28800 * 100)
            .div(new BigNumber(10).pow(tokenDecimals)),
        )

        // tvlInUSD = tvlInUSD.plus(tvlToken2.multipliedBy(window.prices[getAddress(farmConfig.token2.address)]))
        // tvlInUSD = tvlInUSD.plus(tvlToken3.multipliedBy(window.prices[getAddress(farmConfig.token3.address)]))
      }

      const apr = new BigNumber(rrInUSD.div(lpInUSD).multipliedBy(new BigNumber(farmConfig.factor)))

      //  // console.log(prices)
      /* const [info, totalAllocPoint] = await multicall(masterchefABI, [
        {
          address: getMasterChefAddress(),
          name: 'poolInfo',
          params: [farmConfig.pid],
        },
        {
          address: getMasterChefAddress(),
          name: 'totalAllocPoint',
        },
      ]) */

      const allocPoint = new BigNumber(0) // (info.allocPoint._hex)
      const poolWeight = allocPoint.div(new BigNumber(/* totalAllocPoint */ 0))

      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        quoteTokenAmount: quoteTokenAmount.toJSON(),
        lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
        poolWeight: poolWeight.toJSON(),
        multiplier: `${allocPoint.div(100).toString()}X`,
        tvlLP: tvlLP.toJSON(),
        tvlToken: tvlToken.toJSON(),
        tvlInUSD: tvlInUSD.toJSON(),
        apr: Number(apr.toJSON()).toFixed(4),
        ended: farmConfig.pid === 34 ? true : Number(finishAt) < Date.now() / 1000 && Number(finishAt) !== 0,
        end: new BigNumber(finishAt).toJSON(),
      }
    }),
  )
  return data
}

export default fetchFarms
