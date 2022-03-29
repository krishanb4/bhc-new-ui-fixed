import { useWeb3React } from '@web3-react/core'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useAllHarvest } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { StatCard, StatCardHeader, StatCardContent, CardStat, CardStatLabel, CardStatValue } from './CardStyles'

declare const window: any

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
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
      <StatCardHeader title={TranslateString(542, 'Billion Happiness Stats')} />
      <StatCardContent>
        <CardStat>
          <CardStatLabel>{TranslateString(544, 'USD Market Cap')}</CardStatLabel>
          <CardStatValue>
            $
            {Number(window.prices['0x7BEB05cf5681f402E762F8569c2Fc138a2172978'] * 50000)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </CardStatValue>
        </CardStat>
        <CardStat>
          <CardStatLabel>{TranslateString(544, 'BHC Total Supply')}</CardStatLabel>
          <CardStatValue>50,000</CardStatValue>
        </CardStat>
        <CardStat>
          <CardStatLabel>{TranslateString(544, 'Circulating Supply')}</CardStatLabel>
          <CardStatValue>50,000</CardStatValue>
        </CardStat>
      </StatCardContent>
    </StatCard>
  )
}

export default FarmedStakingCard
