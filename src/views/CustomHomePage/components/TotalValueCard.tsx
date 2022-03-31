import { useWeb3React } from '@web3-react/core'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useAllHarvest } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'
import React, { useCallback, useState } from 'react'
import { useFarmsTVL } from 'state/hooks'
import styled from 'styled-components'
import { StatCard, StatCardHeader, StatCardContent, CardStat, CardStatLabel, CardStatValue } from './CardStyles'

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const tvl = useFarmsTVL().toFixed(2) || 0

  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StatCard>
      <StatCardHeader title={TranslateString(542, 'Total Value Locked (TVL)')} />
      <StatCardContent>
        <CardStat>
          <CardStatLabel>{TranslateString(544, 'Across all Farms and Pools')}</CardStatLabel>
          <CardStatValue>${tvl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</CardStatValue>
        </CardStat>
      </StatCardContent>
    </StatCard>
  )
}

export default FarmedStakingCard
