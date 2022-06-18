import React from 'react'
import { CommunityTag, CoreTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'
import { Tag, Flex, Heading, Image, Text } from '@pancakeswap-libs/uikit'
import { CardHeader, CardLabel, CardTitle } from './FarmCardStyles'

export interface ExpandableSectionProps {
  lpLabel?: string
  stakeNote?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}



const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
  stakeNote,
}) => {
  const TranslateString = useI18n()
  return (
    <CardHeader>
      <Image src={`/images/new_farm/${farmImage}.png`} alt={tokenSymbol} width={64} height={64} />

      <CardTitle>{lpLabel}</CardTitle>
    </CardHeader>
  )
}

export default CardHeading
