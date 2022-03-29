import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import Button from '@mui/material/Button';
import useI18n from 'hooks/useI18n'
import { useHarvest, useHarvestBHC } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import Box from '@mui/material/Box';
import styled from 'styled-components'
import { CardLabelWhite } from './FarmCardStyles'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  willEarn?: string
  farmContract?: Contract
}

const HarvestAction: React.FC<FarmCardActionsProps> = ({ willEarn, earnings, pid, farmContract }) => {
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvestBHC(farmContract)

  const harvestBtn = willEarn

  // // console.log(harvestBtn)

  const rawEarningsBalance = account ? getBalanceNumber(earnings) : 0
  const displayBalance = rawEarningsBalance.toFixed(7)

  const renderHarvestButton = () => {
    return harvestBtn === '4th-Pool-BHC' ? (
      <>
        <div className="custom-height"> </div>
      </>
    ) : (
      <>
        <HarvestButton
          variant="contained"
          disabled={rawEarningsBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          {TranslateString(562, 'Harvest')}
        </HarvestButton>
      </>
    )
  }

  return (
    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <CardLabelWhite sx={{ color: `${rawEarningsBalance === 0 ? '#ddd' : '#000'}` }}>{displayBalance}</CardLabelWhite>
      {willEarn !== 'dummy' ? renderHarvestButton() : null}
    </Box>
  )
}

const HarvestButton = styled(Button)`
  border-radius: 4px;
  background: rgba(248, 116, 48, 0.32);
  color: #fff;
`

export default HarvestAction
