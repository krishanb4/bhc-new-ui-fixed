import React from 'react'
import styled from 'styled-components'
import { Box } from '@mui/system'
import Page from 'components/layout/Page'
import { styled as muiStyled } from '@mui/material/styles'

const Audit = () => {
  return (
    <Page>
      <Hero>
        <HeroTitle>Audit</HeroTitle>
      </Hero>
      <InfoCard sx={{ mb: 3 }}>
        <a href="https://www.certik.com/projects/billionhappiness" target="_blank" rel="noreferrer">
          <img style={{ width: '30%' }} src="/images/certik.png" alt="certik logo" />
        </a>
      </InfoCard>
    </Page>
  )
}

const Hero = styled.div`
  padding-top: 40px;
  padding-bottom: 36px;
  text-align: center;
  @media only screen and (min-width: 1200px) {
    padding-top: 0;
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
    fontSize: 62
  },
  '@media only screen and (min-width: 1200px)': {
    fontSize: 75
  }
}))

const InfoCard = muiStyled(Box)(({ theme }) => ({
  borderRadius: 25,
  backdropFilter: 'blur(9px)',
  backgroundColor: theme.palette.info.contrastText,
  boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.3), 0px 1px 5px 1px rgba(0, 0, 0, 0.15)',
  padding: '36px 50px',
  flexGrow: 1
}))

export default Audit
