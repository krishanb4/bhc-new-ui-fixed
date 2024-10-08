import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest, useHarvestBHC } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'

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
        <Button
          disabled={rawEarningsBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          {TranslateString(562, 'Harvest')}
        </Button>
      </>
    )
  }

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center">
      <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
      {willEarn !== 'dummy' ? renderHarvestButton() : null}
    </Flex>
  )
}

export default HarvestAction
