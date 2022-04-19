import React from 'react'
import LinkIcon from '@mui/icons-material/Link'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, LinkExternal } from '@pancakeswap-libs/uikit'
import Box from '@mui/material/Box'
import { CardLabel, StyledLinkExternal } from './FarmCardStyles'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {
  const TranslateString = useI18n()

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CardLabel>
          {TranslateString(354, 'TVL')}:
        </CardLabel>
        <CardLabel>{totalValueFormatted}</CardLabel>
      </Box>
      {!removed && (
        <StyledLinkExternal href={addLiquidityUrl} underline="none">
          {TranslateString(999, `Get ${lpLabel}`, { name: lpLabel })}
          <LinkIcon />
        </StyledLinkExternal>
      )}

      <StyledLinkExternal href={bscScanAddress} underline="none">
        {TranslateString(999, 'View Contract')}
        <LinkIcon />
      </StyledLinkExternal>

      {lpLabel.includes('-') ? (
        <StyledLinkExternal href={infoAddress} underline="none">
          {TranslateString(999, 'See Pair Info')}
          <LinkIcon />
        </StyledLinkExternal>
      ) : (
        <></>
      )}
    </Box>
  )
}

export default DetailsSection
