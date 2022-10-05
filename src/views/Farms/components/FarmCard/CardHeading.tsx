import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image, Text } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'

export interface ExpandableSectionProps {
  lpLabel?: string
  stakeNote?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

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
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image src={`/images/new_farm/${farmImage}.png`} alt={tokenSymbol} width={64} height={64} />
      <Flex flexDirection="column" alignItems="flex-end">
        {/* <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading> */}
        <Heading mb="4px">{lpLabel}</Heading>
        <Text textAlign="right" fontSize="18px" color="#6681ca">
          {TranslateString(354, stakeNote)}
        </Text>
        <Flex justifyContent="center">
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          {/* <MultiplierTag variant="secondary">{multiplier}</MultiplierTag> */}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
