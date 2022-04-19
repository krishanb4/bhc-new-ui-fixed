import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { provider as ProviderType } from 'web3-core'
import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract, getFarmContract } from 'utils/contractHelpers'
import { Button, Flex, Text } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import useWeb3 from 'hooks/useWeb3'
import { useApprove, useApproveBHC } from 'hooks/useApprove'
import UnlockButton from 'components/UnlockButton'
import BigNumber from 'bignumber.js'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'

const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends Farm {
  test?: number
}
interface balanceConstraints {
  stakeFulfilled: boolean
  withdrawFulfilled: boolean
  msg: string
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  provider?: ProviderType
  account?: string
  addLiquidityUrl?: string
  endLabel?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl, endLabel }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  // const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol)
  const { pid, lpAddresses, farmAddress, balanceConstraints, balanceCheck, limitCheck, limit, lpSymbol } = farm
  const { allowance, tokenBalance, stakedBalance, earnings, dualEarnings, constraintBalances } = useFarmUser(pid)
  let limitedBalance = tokenBalance
  const lpAddress = getAddress(lpAddresses)
  const lpName = farm.lpSymbol === '4th-Pool-BHC' ? 'BHC' : farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const web3 = useWeb3()
  const constraints = {
    stakeFulfilled: true,
    withdrawFulfilled: true,
    msg: '',
  }

  if (balanceCheck) {
    for (let i = 0; i < balanceConstraints.length; i++) {
      if (balanceConstraints[i].limit > Number(constraintBalances[i]) / 10 ** 18) {
        constraints.stakeFulfilled = false
        constraints.withdrawFulfilled = false
        constraints.msg = `${constraints.msg !== '' ? `${constraints.msg}, ` : ''}${
          balanceConstraints[i].token.symbol
        } balance must be greater than ${balanceConstraints[i].limit}`
      }
    }
  }

  if (limitCheck) {
    if (limit <= Number(stakedBalance) / 10 ** 18) {
      constraints.stakeFulfilled = false
      constraints.msg = `${
        constraints.msg !== '' ? `${constraints.msg}, ` : ''
      }Can't stake more than ${limit} ${lpSymbol}.`
    }
    limitedBalance = new BigNumber(limit).multipliedBy(10 ** 18).minus(stakedBalance)
    if (limitedBalance.isGreaterThan(tokenBalance)) {
      limitedBalance = tokenBalance
    }
  }

  //  // console.log(useFarmFromSymbol(farm.lpSymbol))
  //  // console.log(Number(allowance))

  const lpContract = getBep20Contract(lpAddress, web3)
  const farmContract = getFarmContract(farmAddress, web3)

  const { onApprove } = useApproveBHC(lpContract, farmContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      // console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    if (endLabel === 'Ended') {
      return (
        <StakeAction
          stakedBalance={stakedBalance}
          tokenBalance={limitedBalance}
          tokenName={lpName}
          pid={pid}
          addLiquidityUrl={addLiquidityUrl}
          farmContract={farmContract}
          endLabel={endLabel}
          locked={farm.locked}
          constraints={constraints}
        />
      )
    }
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={limitedBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
        farmContract={farmContract}
        endLabel={endLabel}
        locked={farm.locked}
        stakeNote={farm.stakeNote}
        constraints={constraints}
      />
    ) : (
      <Button mt="8px" width="100%" disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(758, 'Approve Contract')}
      </Button>
    )
  }

  const renderEarnedSection = () => {
    return farm.dualEarn ? (
      <>
        <Flex>
          <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
            {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
            {farm.earn}
          </Text>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
            {TranslateString(1072, 'Earned')}
          </Text>
        </Flex>
        <HarvestAction earnings={dualEarnings[0]} pid={pid} willEarn="dummy" farmContract={farmContract} />

        <Flex>
          <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
            {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
            {farm.earn2}
          </Text>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
            {TranslateString(1072, 'Earned')}
          </Text>
        </Flex>
        <HarvestAction earnings={dualEarnings[1]} pid={pid} willEarn="test" farmContract={farmContract} />
        <Flex>
          <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
            {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
            {farm.earn3}
          </Text>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
            {TranslateString(1072, 'Earned')}
          </Text>
        </Flex>
        <HarvestAction earnings={dualEarnings[2]} pid={pid} willEarn="dummy" farmContract={farmContract} />
      </>
    ) : (
      <>
        <Flex>
          <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
            {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
            {farm.earn}
          </Text>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
            {TranslateString(1072, 'Earned')}
          </Text>
        </Flex>
        <HarvestAction earnings={earnings} pid={pid} willEarn={farm.lpSymbol} farmContract={farmContract} />
      </>
    )
  }

  return (
    <Action>
      {renderEarnedSection()}
      <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          {lpName}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(1074, 'Staked')}
        </Text>
      </Flex>
      {!account ? <UnlockButton mt="8px" width="100%" /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
