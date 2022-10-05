import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Contract } from 'web3-eth-contract'

import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useStakeBHC } from 'hooks/useStake'
import { useUnstakeBHC } from 'hooks/useUnstake'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

const Label = styled.div`
  margin-top: 20px;
  color: #6681ca;
  font-size: 12px;
  font-weight: 900;
`

interface balanceConstraints {
  stakeFulfilled: boolean
  withdrawFulfilled: boolean
  msg: string
}

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  pid?: number
  addLiquidityUrl?: string
  farmContract?: Contract
  endLabel?: string
  locked?: boolean
  stakeNote?: string
  constraints: balanceConstraints
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const StakeAction: React.FC<FarmCardActionsProps> = ({
  stakedBalance,
  tokenBalance,
  tokenName,
  pid,
  addLiquidityUrl,
  farmContract,
  endLabel,
  locked,
  stakeNote,
  constraints,
}) => {
  const TranslateString = useI18n()
  const { onStake } = useStakeBHC(farmContract)
  const { onUnstake } = useUnstakeBHC(farmContract)

  const displayBalance = useCallback(() => {
    const stakedBalanceNumber = getBalanceNumber(stakedBalance)
    if (stakedBalanceNumber > 0 && stakedBalanceNumber < 0.0001) {
      return getFullDisplayBalance(stakedBalance).toLocaleString()
    }
    return stakedBalanceNumber.toLocaleString()
  }, [stakedBalance])

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
      addLiquidityUrl={addLiquidityUrl}
      stakeNote={stakeNote}
    />,
  )
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={tokenName} />,
  )

  const renderStakingButtons = () => {
    return stakedBalance.eq(0) ? (
      <Button
        disabled={
          endLabel === 'Ended' || endLabel.includes('UTC') || endLabel.includes('soon') || !constraints.stakeFulfilled
        }
        onClick={onPresentDeposit}
      >
        {TranslateString(999, `Stake ${tokenName}`)}{' '}
      </Button>
    ) : (
      <IconButtonWrapper>
        <IconButton
          variant="tertiary"
          disabled={(endLabel !== 'Ended' && locked === true) || !constraints.withdrawFulfilled}
          onClick={onPresentWithdraw}
          mr="6px"
        >
          <MinusIcon color="primary" width="14px" />
        </IconButton>
        <IconButton
          disabled={endLabel === 'Ended' || !constraints.stakeFulfilled}
          variant="tertiary"
          onClick={onPresentDeposit}
        >
          <AddIcon color="primary" width="14px" />
        </IconButton>
      </IconButtonWrapper>
    )
  }

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading color={stakedBalance.eq(0) ? 'textDisabled' : 'text'}>{displayBalance()}</Heading>
        {renderStakingButtons()}
      </Flex>
      <Label>{constraints.msg}</Label>
    </div>
  )
}

export default StakeAction
