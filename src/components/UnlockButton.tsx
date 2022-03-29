import React from 'react'
import { useWalletModal } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import Button from '@mui/material/Button';

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <CustomButton variant="contained" disableElevation fullWidth onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </CustomButton>
  )
}

const CustomButton = styled(Button)`
  &.MuiButtonBase-root {
    border-radius: 18px;
    font-size: 18px;
    padding: 10px 16px;
    color: #fff;
    text-transform: capitalize;
  }
`

export default UnlockButton
