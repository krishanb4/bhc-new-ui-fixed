import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Grid from '@mui/material/Grid'
import { Route, useRouteMatch } from 'react-router-dom'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { styled as muiStyled } from '@mui/material/styles'

import Page from 'components/layout/Page'
import { useFarms, usePriceCakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsyncBHC } from 'state/actions'

import FarmCard from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'

import farmsConfig from '../../config/constants/farms'

export enum FarmType {
  Farming = 'farming',
  EmotionPools = 'emotional',
  MilestonePools = 'milestone',
}

interface FarmsInterface {
  type: FarmType
  title: string
  subTitle: string
}

const Farms: React.FC<FarmsInterface> = ({ title, subTitle, type }) => {
  const { path } = useRouteMatch()

  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const { account } = useWeb3React()

  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsyncBHC(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.ended === false)
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.ended === true)

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.pid !== 0 && farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedInactiveFarms = inactiveFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const getFarms = () => {
    let allFarms = []
    if (stakedOnly) {
      allFarms = stakedOnlyFarms
    } else {
      allFarms = farmsConfig
    }

    allFarms = allFarms.filter(({ category }) => {
      return category === type
    })

    return allFarms
  }

  return (
    <Page>
      <Hero>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subTitle}</HeroSubtitle>
      </Hero>
      <ToolBar>
        <FormGroup>
          <FormControlSwitch
            control={<Switch onChange={(e) => setStakedOnly(e.target.checked)} />}
            label="STAKED ONLY"
          />
        </FormGroup>
        <FarmTabButtons path={path} />
      </ToolBar>
      <Grid container spacing={2} style={{ justifyContent: 'center' }}>
        <Route exact path={`${path}`}>
          {getFarms().map((farm) =>
            !farm.ended ? (
              <Grid item xs={12} sm={6} md={4}>
                <FarmCard key={farm.pid} farm={farm} cakePrice={cakePrice} account={account} removed={false} />
              </Grid>
            ) : (
              <></>
            ),
          )}
        </Route>
        <Route exact path={`${path}/history`}>
          {getFarms().map((farm) =>
            farm.ended ? (
              <Grid item xs={12} sm={6} md={4}>
                <FarmCard key={farm.pid} farm={farm} cakePrice={cakePrice} account={account} removed />
              </Grid>
            ) : (
              <></>
            ),
          )}
        </Route>
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
    padding-bottom: 100px;
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

const ToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  justify-content: center;
`

const FormControlSwitch = muiStyled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  '.css-jsexje-MuiSwitch-thumb': {
    background: '#fff',
    border: `1px solid ${theme.palette.primary.main}`,
    filter: 'drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.7))',
  },
}))

export default Farms
