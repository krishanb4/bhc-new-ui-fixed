import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { useFarmFromPid } from 'state/hooks'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider as ProviderType } from 'web3-core'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  liquidity?: BigNumber
}

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 32px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const Label = styled.div`
  margin-top: 20px;
  color: #f88130;
  font-size: 25px;
  font-weight: 900;
`

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
  
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  // provider?: ProviderType
  account?: string
}

let counter = 0

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, account }) => {
  // const farm2 = {
  //   "apr": 77.00328899286781,
  //   "liquidity": new BigNumber(1122636951),
  //   "lpAddresses": {56: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6", 97: "0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4"},
  //   "lpSymbol": "CAKE-BNB LP",
  //   "lpTotalSupply": new BigNumber(1122636951),
  //   "multiplier": "40X",
  //   "pid": 1,
  //   "poolWeight": new BigNumber(1122636951),
  //   "quoteToken": {
  //     "address": {56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", 97: "0xae13d989dac2f0debff460ac112a837c89baa7cd"},
  //     "decimals": 18,
  //     "projectLink": "https://pancakeswap.finance/",
  //     "symbol": "wBNB",
  //   },
  //   "quoteTokenAmount": new BigNumber(1122636951),
  //   "token": {
  //     "address": {56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", 97: "0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe"},
  //     "decimals": 18,
  //     "projectLink": "https://pancakeswap.finance/",
  //     "symbol": "CAKE",
  //   },
  //   "tokenAmount": new BigNumber(1122636951),
  //   "tokenPriceVsQuote": new BigNumber(1122636951),
  // }

  counter += 1

  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const farmData = useFarmFromPid(farm.pid)
  // console.log(farmData)

  const isCommunityFarm = communityFarms.includes(farm.token.symbol)
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = farm.image.split(' ')[0].toLocaleLowerCase()

  const totalValueFormatted = farmData.lpTotalSupply
    ? `$${Number(farmData.tvlInUSD).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  const lpLabelTemp = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const lpLabel = lpLabelTemp === '4TH-POOL-BHC' ? 'BHC' : lpLabelTemp
  // const earnLabel = farm.dual ? farm.dual.earnLabel : 'CAKE'
  const earnLabel = farm.earn

  const farmAPR = farmData.apr //  && farmData.apr.toLocaleString('en-US', { maximumFractionDigits: 2 })

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]

  // const lpLabel = 'Feeling Excited-'
  // const lpLabel = `Feeling Excited-${counter}`
  // const multiplier = '1 X'
  // // console.log(farmImage)

  // // console.log(earnLabel)

  const dayCount = Math.round((farmData.end - Math.floor(Date.now() / 1000)) / 60 / 60 / 24)
  let endLabel = ''
  if (dayCount > 0) {
    endLabel = `Ends in: ${dayCount} Days`
    if (farmData.pid === 15) {
      endLabel = ''
    }
  } else if (dayCount <= 0) {
    if (Number(farmData.end) !== 0) {
      endLabel = 'Ended'
    } else {
      endLabel = farm.start
    }
  }
  if (farmData.ended) {
    endLabel = 'Ended'
  }

  return (
    <FCard>
      {farm.token.symbol !== 'CAKE' && <StyledCardAccent />}
      <CardHeading
        lpLabel={farm.farmName}
        stakeNote={farm.stakeNote}
        multiplier={farm.multiplier}
        isCommunityFarm={isCommunityFarm}
        farmImage={farmImage}
        tokenSymbol={farm.token.symbol}
      />
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text style={{ textAlign: 'left' }}>{TranslateString(736, 'APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farmData.apr ? <>{farmAPR}%</> : <Skeleton height={24} width={80} />}
          </Text>
        </Flex>
      )}
      {!farm.dualEarn ? (
        <Flex justifyContent="space-between">
          <Text style={{ textAlign: 'left' }}>{TranslateString(318, 'Earn')}:</Text>
          <Text bold>{earnLabel}</Text>
        </Flex>
      ) : (
        <Flex justifyContent="space-between">
          <Text>{TranslateString(318, 'Earn')}:</Text>
          <Text bold>
            {farm.token.symbol},{farm.token2.symbol},{farm.token3.symbol}
          </Text>
        </Flex>
      )}

      <CardActionsContainer farm={farm} account={account} addLiquidityUrl={farm.buyURL} endLabel={endLabel} />
      <Label>{endLabel}</Label>
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          bscScanAddress={`https://www.oklink.com/en/ethw/address/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`}
          infoAddress={farm.info}
          totalValueFormatted={totalValueFormatted}
          lpLabel={lpLabel}
          addLiquidityUrl={farm.buyURL}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
