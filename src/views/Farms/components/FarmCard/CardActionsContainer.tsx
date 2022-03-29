import React, { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { provider as ProviderType } from 'web3-core'
import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract, getFarmContract } from 'utils/contractHelpers'
import { Farm } from 'state/types'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import useWeb3 from 'hooks/useWeb3'
import { useApprove, useApproveBHC } from 'hooks/useApprove'
import UnlockButton from 'components/UnlockButton'
import BigNumber from 'bignumber.js'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'
import { CardLabel } from './FarmCardStyles'

export interface FarmWithStakedValue extends Farm {
  test?: number
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  provider?: ProviderType
  account?: string
  addLiquidityUrl?: string
  endLabel?: string
}

const newFarm = {
  apr: 77.00328899286781,
  liquidity: new BigNumber(1122636951),
  lpAddresses: { 56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6', 97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4' },
  lpSymbol: 'SWINGBY-BNB LP',
  lpTotalSupply: new BigNumber(1122636951),
  multiplier: '40X',
  pid: 3,
  poolWeight: new BigNumber(1122636951),
  quoteToken: {
    address: { 56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 97: '0xae13d989dac2f0debff460ac112a837c89baa7cd' },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
    symbol: 'wBNB',
  },
  quoteTokenAmount: new BigNumber(1122636951),
  token: {
    address: { 56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe' },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
    symbol: 'CAKE',
  },
  tokenAmount: new BigNumber(1122636951),
  tokenPriceVsQuote: new BigNumber(1122636951),
  userData: {
    allowance: new BigNumber(0),
    earnings: new BigNumber(0),
    index: 117,
    stakedBalance: new BigNumber(0),
    tokenBalance: new BigNumber(0),
  },
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl, endLabel }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  // const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol)
  const { pid, lpAddresses, farmAddress } = farm
  const { allowance, tokenBalance, stakedBalance, earnings, dualEarnings } = useFarmUser(pid)
  const lpAddress = getAddress(lpAddresses)
  const lpName = farm.lpSymbol === '4th-Pool-BHC' ? 'BHC' : farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const web3 = useWeb3()

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
          tokenBalance={tokenBalance}
          tokenName={lpName}
          pid={pid}
          addLiquidityUrl={addLiquidityUrl}
          farmContract={farmContract}
          endLabel={endLabel}
          locked={farm.locked}
        />
      )
    }
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
        farmContract={farmContract}
        endLabel={endLabel}
        locked={farm.locked}
        stakeNote={farm.stakeNote}
      />
    ) : (
      <Button variant="contained" disableElevation fullWidth disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(758, 'Approve Contract')}
      </Button>
    )
  }

  const renderEarnedSection = () => {
    return farm.dualEarn ? (
      <>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardLabel>
            {farm.earn} {TranslateString(1072, 'Earned')}
          </CardLabel>
        </Box>
        <HarvestAction earnings={dualEarnings[0]} pid={pid} willEarn="dummy" farmContract={farmContract} />

        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardLabel>
            {farm.earn2} {TranslateString(1072, 'Earned')}
          </CardLabel>
        </Box>
        <HarvestAction earnings={dualEarnings[1]} pid={pid} willEarn="test" farmContract={farmContract} />

        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardLabel>
            {farm.earn3} {TranslateString(1072, 'Earned')}
          </CardLabel>
        </Box>
        <HarvestAction earnings={dualEarnings[2]} pid={pid} willEarn="dummy" farmContract={farmContract} />
      </>
    ) : (
      <>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardLabel>
            {farm.earn} {TranslateString(1072, 'Earned')}
          </CardLabel>
        </Box>
        <HarvestAction earnings={earnings} pid={pid} willEarn={farm.lpSymbol} farmContract={farmContract} />
      </>
    )
  }

  return (
    <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {renderEarnedSection()}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CardLabel>
          {lpName} {TranslateString(1074, 'Staked')}
        </CardLabel>
      </Box>
      {!account ? <UnlockButton mt="8px" width="100%" /> : renderApprovalOrStakeButton()}
    </Box>
  )
}

export default CardActions
