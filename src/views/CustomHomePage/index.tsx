/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { styled as muiStyled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import MUIModal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useI18n from 'hooks/useI18n'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import StatsCard from 'views/CustomHomePage/components/StatsCard'
import TotalValueCard from 'views/CustomHomePage/components/TotalValueCard'
import WalletCard from 'views/CustomHomePage/components/WalletCard'
import Page from 'components/layout/Page'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '100%' : '50%',
  height: isMobile ? '100%' : 'auto',
  boxShadow: 24,
  border: '2px solid #fa8123',
  backgroundColor: '#fa8123',
  borderRadius: isMobile ? 0 : 10,
  p: 4,
}

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const [openIntro, setOpenIntro] = useState<boolean>(false)
  const [showLearnMore, setShowLearnMore] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem('SKIPPED_INTRO')) {
        setOpenIntro(true)
      }
    }, 3000)
  }, [])

  const onSkip = () => {
    setOpenIntro(false)
    localStorage.setItem('SKIPPED_INTRO', 'YES')
  }
  return (
    <>
      <Page>
        <Hero>
          <HeroTitle>{TranslateString(576, 'Billion Happiness ')}</HeroTitle>
          <HeroSubtitle>
            {TranslateString(
              578,
              'Billion Happiness is a blockchain community-based project for Defi, Yield Farming, Staking and NFT Marketplace.',
            )}
          </HeroSubtitle>
        </Hero>
        <CardCols>
          <LeftCol>
            <StatsCard />
          </LeftCol>
          <Character src="/images/character/character-1.png" />
          <RightCol>
            <WalletCard />
            <TotalValueCard />
          </RightCol>
        </CardCols>
      </Page>
      <IntroModal
        open={openIntro}
        onClose={() => {
          //
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            {!showLearnMore ? (
              <>
                <ModalClose aria-label="CLose modal" onClick={onSkip}>
                  <img src="/images/icons/icon-close.svg" alt="close modal" />
                </ModalClose>
                <IntroModalTitle id="modal-modal-title" variant="h2">
                  Welcome to Billion Happiness!
                </IntroModalTitle>
                <IntroModalSubtitle variant="h5" id="modal-modal-description" sx={{ mt: 3 }}>
                  If you're new to Billion Happiness, check out our website for a quick start guide. Otherwise, you may
                  choose to skip right away.
                </IntroModalSubtitle>
                <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
                  <Button onClick={onSkip} variant="contained" color="secondary" disableElevation>
                    Skip
                  </Button>
                  <Button onClick={() => setShowLearnMore(true)} variant="outlined" color="secondary" disableElevation>
                    Learn more
                  </Button>
                </Stack>
              </>
            ) : (
              <>
                <IntroModalTitle id="modal-modal-title" variant="h2">
                  Learn more
                </IntroModalTitle>
                <LearnMore>
                  <ListItem disablePadding>
                    <Link href="/learn/1" target="_blank" color="inherit">
                      Give me a Quick Tour
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="/learn/2" target="_blank" color="inherit">
                      What is Billion Happiness
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="/learn/3" target="_blank" color="inherit">
                      How to set-up your wallet?
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="/learn/4" target="_blank" color="inherit">
                      How to Trade/Swap?
                    </Link>
                  </ListItem>
                </LearnMore>
                <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
                  <Button onClick={onSkip} variant="contained" color="secondary" disableElevation>
                    Close
                  </Button>
                </Stack>
              </>
            )}
          </>
        </Box>
      </IntroModal>
    </>
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
    padding-bottom: 100px;
    padding-right: 40px;
    padding-left: 40px;
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

const CardCols = styled(Box)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: space-between;
  }
`

const LeftCol = styled(Grid)`
  position: relative;
  margin-bottom: 20px;
  order: 2;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    order: initial;
    width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
`

const Character = styled.img`
  width: 90%;
  z-index: 1;
  margin: -40px auto 20px auto;
  order: 1;

  @media only screen and (min-width: 768px) {
    width: 45%;
    margin: -50px auto 20px auto;
    order: initial;
  }

  @media only screen and (min-width: 1336px) {
    width: 420px;
    margin: -80px -100px 0 -100px;
  }
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  order: 3;

  @media only screen and (min-width: 768px) {
    width: 100%;
    align-items: flex-start;
    order: initial;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
  }

  @media only screen and (min-width: 1366px) {
    width: 40%;
    flex-direction: column;
    align-items: flex-end;
  }
`

const IntroModal = muiStyled(MUIModal)(({ theme }) => ({
  '.MuiBox-root': {
    padding: 32,
    borderRadius: 25,
    backdropFilter: 'blur(9px)',
    backgroundColor: theme.palette.info.dark,
    border: `1px solid ${theme.palette.info.light}`,
  },
}))

const IntroModalTitle = muiStyled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: theme.palette.primary.main,
    fontSize: 36,
  },
}))

const ModalClose = styled(IconButton)`
  &.MuiButtonBase-root {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 10px;
  }
`

const IntroModalSubtitle = muiStyled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: theme.palette.primary.contrastText,
    fontSize: 24,
  },
}))

const LearnMore = muiStyled(List)(({ theme }) => ({
  '&.MuiList-root': {
    marginTop: 12,
    li: {
      '& + li': {
        marginTop: 16,
      },
      a: {
        color: theme.palette.primary.contrastText,
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
        fontSize: 18,
      },
    },
  },
}))

export default Home
