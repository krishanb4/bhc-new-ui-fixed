import React from 'react'
import useI18n from 'hooks/useI18n'
import useTokenBalance from 'hooks/useTokenBalance'
import { StatCard, StatCardHeader, StatCardContent, Wallet, WalletIcon, WalletLabel } from './CardStyles'

const FarmedStakingCard = () => {
  const TranslateString = useI18n()
  const BHCBalance = useTokenBalance('0x7BEB05cf5681f402E762F8569c2Fc138a2172978')
  const HPSBalance = useTokenBalance('0xAC1F25AEE575D35C668B0a4D336f20E3e92adCd2')

  return (
    <StatCard>
      <StatCardHeader title={TranslateString(542, 'Your Wallet')} />
      <StatCardContent>
        <Wallet>
          <WalletIcon src="/images/bhc.png" alt="bhc logo" />
          <div>
            <WalletLabel>{TranslateString(546, 'BHC in wallet')}</WalletLabel>
            <WalletLabel> {Number(Number(BHCBalance) / 10 ** 18).toFixed(2)}</WalletLabel>
          </div>
        </Wallet>
        <Wallet>
          <WalletIcon src="/images/hps-logo.png" alt="HPS logo" />
          <div>
            <WalletLabel>{TranslateString(546, 'HPS in wallet')}</WalletLabel>
            <WalletLabel>{Number(Number(HPSBalance) / 10 ** 18).toFixed(2)}</WalletLabel>
          </div>
        </Wallet>
      </StatCardContent>
    </StatCard>
  )
}

export default FarmedStakingCard
