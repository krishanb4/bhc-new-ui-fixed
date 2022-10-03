import React, { FC } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

interface FarmTabButtonsProps {
  path: string
}

const FarmTabButtons: FC<FarmTabButtonsProps> = ({ path }) => {
  const [status, setStatus] = React.useState('Live')

  const history = useHistory()

  return (
    <StatusSwitch value={status}>
      <StatusSwitchButton
        selected={status === 'Live'}
        onClick={() => {
          setStatus('Live')
          history.push(`${path}/`)
        }}
        value="Live"
      >
        Live
      </StatusSwitchButton>
      <StatusSwitchButton
        selected={status === 'Finished'}
        value="Finished"
        onClick={() => {
          setStatus('Finished')
          history.push(`${path}/history`)
        }}
      >
        Finished
      </StatusSwitchButton>
    </StatusSwitch>
  )
}

const StatusSwitch = styled(ToggleButtonGroup)`
  &.MuiToggleButtonGroup-root {
    border-radius: 30px;
    background: transparent;
    height: 30px;

    @media only screen and (min-width: 768px) {
      margin-left: 20px;
    }
  }
`

const StatusSwitchButton = styled(ToggleButton)`
  &.MuiButtonBase-root {
    border-radius: 30px !important;
    padding: 5px 16px;
    line-height: 1;
    font-size: 14px;
    color: #6681ca;
    border: none !important;
    height: 30px;

    & + button {
      margin-left: 12px !important;
    }

    &.Mui-selected {
      background: #6681ca;
      color: #fff;

      &:hover {
        background: #6681ca;
      }
    }

    @media only screen and (min-width: 768px) {
      min-width: 80px;
    }
  }
`

export default FarmTabButtons
