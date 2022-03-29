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
      <Button disabled={endLabel === 'Ended' || !endLabel.includes('Days')} onClick={onPresentDeposit}>
        {TranslateString(999, `Stake ${tokenName}`)}{' '}
      </Button>
    ) : (
      <IconButtonWrapper>
        <IconButton
          variant="tertiary"
          disabled={endLabel !== 'Ended' && locked === true}
          onClick={onPresentWithdraw}
          mr="6px"
        >
          <MinusIcon color="primary" width="14px" />
        </IconButton>
        <IconButton disabled={endLabel === 'Ended'} variant="tertiary" onClick={onPresentDeposit}>
          <AddIcon color="primary" width="14px" />
        </IconButton>
      </IconButtonWrapper>
    )
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading color={stakedBalance.eq(0) ? 'textDisabled' : 'text'}>{displayBalance()}</Heading>
      {renderStakingButtons()}
    </Flex>
  )
}

export default StakeAction
