import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import styled from "styled-components"
import { styled as muiStyled } from '@mui/material/styles'

export const StatCard = muiStyled(Card)(({ theme }) => ({
  '&.MuiPaper-root': {
    borderRadius: 30,
    backdropFilter: 'blur(30px)',
    backgroundColor: theme.palette.info.contrastText,
    width: '100%',
    boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.3), 0px 1px 5px 1px rgba(0, 0, 0, 0.15)',
    '& + div': {
      marginTop: 20,
      width: '100%'
    },
    '@media only screen and (min-width: 1200px)': {
      width: 'auto',
      '& + div': {
        marginTop: 0,
        marginLeft: 40
      }
    },
    '@media only screen and (min-width: 1366px)': {
      width: 'auto',
      '& + div': {
        marginTop: 40,
      }
    }
  }
}))

export const StatCardHeader = muiStyled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  fontSize: 42,
  textAlign: 'center',
  color: theme.palette.primary.main,
  padding: '20px 24px',
  'span': {
    fontWeight: 600,
    fontSize: 24,
  },
  '@media only screen and (min-width: 768px)': {
    whiteSpace: 'nowrap',
    'span': {
      fontSize: 30
    }
  }
}))

export const StatCardContent = styled(CardContent)`
  padding: 16px 24px;
`

export const CardStat = styled.div`
  text-align: center;

  & + div {
    margin-top: 30px;
  }
`

export const CardStatLabel = muiStyled('p')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 24,
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
  marginTop: 0,
  marginBottom: 15
}))

export const CardStatValue = muiStyled('p')(({ theme }) => ({
  fontWeight: 600,
  fontSize: 32,
  lineHeight: 1,
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
  margin: 0
}))

export const Wallet = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 24px;
  }
`

export const WalletIcon = styled.img`
  width: 50px;
  margin-right: 20px;

  @media only screen and (min-width: 768px) {
    width: 54px;
    margin-right: 24px;
  }
`

export const WalletLabel = muiStyled('div')(({ theme }) => ({
  fontSize: 24,
  color: theme.palette.primary.contrastText,
  lineHeight: 1,
  '& + div': {
    marginTop: 10
  },
  '@media only screen and (min-width: 768px)': {
    fontSize: 32
  }
}))