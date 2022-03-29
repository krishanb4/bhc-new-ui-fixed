import React, { useState } from 'react'
import Box from '@mui/material/Box'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import Skeleton from '@mui/material/Skeleton'
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
import { CardLabel, CardLabelLarge, FCard, Divider } from './FarmCardStyles'

export interface FarmWithStakedValue extends Farm {
  liquidity?: BigNumber
}

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  provider?: ProviderType
  account?: string
}

let counter = 0

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, account }) => {
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

  const dayCount = Math.round((farmData.end - Math.floor(Date.now() / 1000)) / 60 / 60 / 24)
  let endLabel = ''
  if (dayCount > 0) {
    endLabel = `Ends in: ${dayCount} Days`
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
      <CardHeading
        lpLabel={farm.farmName}
        stakeNote={farm.stakeNote}
        multiplier={farm.multiplier}
        isCommunityFarm={isCommunityFarm}
        farmImage={farmImage}
        tokenSymbol={farm.token.symbol}
      />
      {!removed && (
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardLabel>{TranslateString(736, 'APR')}:</CardLabel>
          <CardLabel>
            {farmData.apr ? (
              <>{farmAPR}%</>
            ) : (
              <Skeleton variant="rectangular" sx={{ bgcolor: '#686868' }} height={24} width={80} />
            )}
          </CardLabel>
        </Box>
      )}
      {!farm.dualEarn ? (
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardLabel>{TranslateString(318, 'Earn')}:</CardLabel>
          <CardLabel>{earnLabel}</CardLabel>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardLabel>{TranslateString(318, 'Earn')}:</CardLabel>
          <CardLabel>
            {farm.token.symbol},{farm.token2.symbol},{farm.token3.symbol}
          </CardLabel>
        </Box>
      )}

      <CardActionsContainer farm={farm} account={account} addLiquidityUrl={farm.buyURL} endLabel={endLabel} />
      <CardLabelLarge style={{ textAlign: 'center' }}>{endLabel}</CardLabelLarge>
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          bscScanAddress={`https://snowtrace.io/address/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`}
          infoAddress={farm.info}
          totalValueFormatted={totalValueFormatted}
          lpLabel={lpLabel}
          addLiquidityUrl={farm.buyURL}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

export default FarmCard
