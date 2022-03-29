import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Page from 'components/layout/Page'

const exchangeCards = [
  {
    img: 'probit.png',
    link: 'https://www.probit.com/app/exchange/BHC-USDT',
    name: 'BHC',
  },
  {
    img: 'pancakeswap.png',
    link: 'https://pancakeswap.finance/swap?inputCurrency=0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
    name: 'BHC & HPS',
  },
  {
    img: 'apeswap.svg',
    link: 'https://app.apeswap.finance/swap',
    name: 'BHC & HPS',
  },
  {
    img: 'cafe.png',
    link: 'https://dex.cafeswap.finance/#/swap?inputCurrency=0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
    name: 'BHC & HPS',
  },
  {
    img: 'hyperswap.png',
    link: 'https://swap.hyperjump.fi/#/swap?inputCurrency=0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
    name: 'BHC & HPS',
  },
  {
    img: '1inch.svg',
    link: 'https://1inch.exchange/#/BHC/BNB?network=56',
    name: 'BHC & HPS',
  },
  {
    img: 'launchzoneswapx.svg',
    link: 'https://swapx.launchzone.org/#/',
    name: 'BHC',
  },
  {
    img: 'hotbit.png',
    link: 'https://www.hotbit.io/exchange?symbol=BHC_USDT',
    name: 'BHC',
  },
  {
    img: 'new_jetswap.png',
    link: 'https://exchange.jetswap.finance/#/swap?inputCurrency=0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
    name: 'BHC',
  },
]

const Exchanges = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <HeroTitle>{TranslateString(999, 'Exchanges')}</HeroTitle>
      </Hero>

      <Grid container spacing={2}>
        {exchangeCards.map((card) => (
          <Grid item xs={12} sm={6} md={4}>
            <ExchangeCard>
              <img className="exchangeImage" src={`/images/exchanges/${card.img}`} alt="probit" />
              <ExchangeCardButton variant="contained" disableElevation onClick={() => window.open(card.link, '_blank')} fullWidth>
                Trade Here
              </ExchangeCardButton>
              <ExchangeCardFooter>{card.name}</ExchangeCardFooter>
            </ExchangeCard>
          </Grid>
        ))}
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

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 50px;
  line-height: 1.2;
  color: #fa8123;
  margin-top: 0;
  margin-bottom: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 62px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 75px;
  }
`

const ExchangeCard = styled.div`
  padding: 24px;
  border-radius: 25px;
  backdrop-filter: blur(9px);
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 80%;
    display: flex;
    margin: 60px auto;
    height: 72px;
    object-fit: contain;
  }
`

const ExchangeCardButton = styled(Button)`
  border-radius: 15px;
  font-size: 18px;
  padding: 10px 16px;
  color: #fff;
  text-transform: capitalize;
`

const ExchangeCardFooter = styled.div`
  margin-top: auto;
  border-top: 3px solid #707070;
  padding-top: 10px;
  font-size: 25px;
  color: #fa8123;
  font-weight: 600;
  text-align: center;
`

export default Exchanges
