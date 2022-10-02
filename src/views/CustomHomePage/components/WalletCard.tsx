import React from 'react'
import useI18n from 'hooks/useI18n'
import useTokenBalance from 'hooks/useTokenBalance'
import { StatCard, StatCardHeader, StatCardContent, Wallet, WalletIcon, WalletLabel } from './CardStyles'

const FarmedStakingCard = () => {
  const TranslateString = useI18n()
  const BHCBalance = useTokenBalance('0x0c9f28FBdFd79f7C00B805d8c63D053c146d282c')
  const HPSBalance = useTokenBalance('0x0c9f28FBdFd79f7C00B805d8c63D053c146d282c')

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
