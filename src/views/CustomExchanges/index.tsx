import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { styled as muiStyled } from '@mui/material/styles'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import inch from './images/inch.png'
import julswap from './images/apeswap.png'
import bitmart from './images/bitmart.png'
import hotbit from './images/hotbit.png'
import mexc from './images/mexc-global.png'
import jetswap from './images/new_jetswap.png'
import pancakeswap from './images/pancakeswap.png'
import probit from './images/probit.png'

const CustomExchanges = () => {
  return (
    <Page>
      <Hero>
        <HeroTitle>TRADE</HeroTitle>
        <HeroSubtitle>Explore our exchanges and trade your tokens for BHC or HPS.</HeroSubtitle>
      </Hero>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <ExchangeCard>
            <ExchangeCardHeader>Decentralized Exchange (DEX)</ExchangeCardHeader>
            <LogoCardButton
              onClick={() =>
                window.open(
                  'https://pancakeswap.finance/swap?inputCurrency=0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
                  '_blank',
                )
              }
            >
              <img src={pancakeswap} alt="pancakeswap" />
            </LogoCardButton>

            <LogoCardButton
              onClick={() =>
                window.open(
                  'https://apeswap.finance/swap?outputCurrency=0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
                  '_blank',
                )
              }
            >
              <img src={julswap} alt="apeswap" />
            </LogoCardButton>
            <LogoCardButton onClick={() => window.open('https://app.1inch.io/#/56/classic/swap/BNB/BHC', '_blank')}>
              <img src={inch} alt="1inch" />
            </LogoCardButton>
            <LogoCardButton
              onClick={() =>
                window.open(
                  'https://exchange.jetswap.finance/#/swap?outputCurrency=0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
                  '_blank',
                )
              }
            >
              <img src={jetswap} alt="jetswap" />
            </LogoCardButton>
          </ExchangeCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ExchangeCard>
            <ExchangeCardHeader>Centralized Exchange (CEX)</ExchangeCardHeader>
            <LogoCardButton onClick={() => window.open('https://www.mexc.com/exchange/BHC_USDT', '_blank')}>
              <img src={mexc} alt="mexc" />
            </LogoCardButton>
            <LogoCardButton
              onClick={() => window.open('https://www.bitmart.com/trade/en?layout=basic&symbol=BHC_USDT', '_blank')}
            >
              <img src={bitmart} alt="bitmart" />
            </LogoCardButton>
            <LogoCardButton onClick={() => window.open('https://www.probit.com/app/exchange/BHC-USDT', '_blank')}>
              <img src={probit} alt="probit" />
            </LogoCardButton>
            <LogoCardButton onClick={() => window.open('https://www.hotbit.io/exchange?symbol=BHC_USDT', '_blank')}>
              <img src={hotbit} alt="hotbit" />
            </LogoCardButton>
          </ExchangeCard>
        </Grid>
      </Grid>
    </Page>
  )
}

const Hero = styled.div`
  padding-top: 40px;
  padding-bottom: 50px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1200px) {
    padding-top: 0;
    padding-bottom: 64px;
  }
`

const HeroTitle = muiStyled('h1')(({ theme }) => ({
  fontWeight: 600,
  fontSize: 50,
  lineHeight: 1.2,
  color: theme.palette.primary.main,
  marginTop: 0,
  marginBottom: 10,
  '@media only screen and (min-width: 768px)': {
    fontSize: 62,
  },
  '@media only screen and (min-width: 1200px)': {
    fontSize: 75,
  },
}))

const HeroSubtitle = muiStyled('p')(({ theme }) => ({
  fontSize: 24,
  color: theme.palette.primary.contrastText,
  margin: 0,
  '@media only screen and (min-width: 768px)': {
    fontSize: 30,
  },
}))

const ExchangeCard = muiStyled('div')(({ theme }) => ({
  padding: 24,
  borderRadius: 25,
  backdropFilter: 'blur(30px)',
  backgroundColor: theme.palette.info.contrastText,
  boxShadow:
    '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.3), 0px 1px 5px 1px rgba(0, 0, 0, 0.15)',
  marginBottom: 30,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

const ExchangeCardButton = styled(Button)`
  &.MuiButton-root {
    border-radius: 15px;
    font-size: 18px;
    padding: 10px 16px;
    color: #fff;
    text-transform: capitalize;
  }
`

const LogoCardButton = styled(IconButton)`
  &.MuiButtonBase-root {
    border-radius: 5px;
    padding: 0;

    & + button {
      margin-top: 40px;
    }

    img {
      width: 80%;
      height: 60px;
      object-fit: contain;
    }
  }
`

const ExchangeCardHeader = muiStyled('h3')(({ theme }) => ({
  fontSize: 25,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: 40,
}))

const ExchangeCardFooter = styled.div`
  margin-top: auto;
  border-top: 3px solid #707070;
  padding-top: 10px;
  font-size: 25px;
  color: #fa8123;
  font-weight: 600;
  text-align: center;
`

export default CustomExchanges
