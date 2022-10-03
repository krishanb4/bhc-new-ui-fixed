import React from 'react'
import styled from 'styled-components'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import useI18n from 'hooks/useI18n'
import Button from '@mui/material/Button';

export interface ExpandableSectionButtonProps {
  onClick?: () => void
  expanded?: boolean
}

const ExpandableSectionButton: React.FC<ExpandableSectionButtonProps> = ({ onClick, expanded }) => {
  const TranslateString = useI18n()

  return (
    <ExpandButton variant="text" onClick={() => onClick()} aria-label="Hide or show expandable content">
      {expanded ? TranslateString(1066, 'Hide') : TranslateString(658, 'Details')}
      {expanded ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
    </ExpandButton>
  )
}

const ExpandButton = styled(Button)`
  font-weight: 600;
  font-size: 20px;
  color: #6681ca;
  text-transform: capitalize;
  display: flex;
  margin: 0 auto;
  min-width: 160px;

  svg {
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
`

ExpandableSectionButton.defaultProps = {
  expanded: false,
}

export default ExpandableSectionButton
