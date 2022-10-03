import React, { lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import { FarmType } from 'views/Farms/Farms'
import Audit from 'views/Audit'
import Learn from 'views/Learn'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import history from './routerHistory'
import GlobalStyle from './style/Global'

const CustomHomePage = lazy(() => import('./views/CustomHomePage'))
const Farms = lazy(() => import('./views/Farms'))
const CustomExchanges = lazy(() => import('./views/CustomExchanges'))
const PitchDeck = lazy(() => import('./views/PitchDeck'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

declare const window: any

window.prices = {}

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released

  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  useFetchPriceList()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <CustomHomePage />
            </Route>
            <Route path="/exchanges">
              <CustomExchanges />
            </Route>
            <Route path="/audit">
              <Audit />
            </Route>
            <Route path="/learn/:id">
              <Learn />
            </Route>
            <Route path="/staking-pools">
              <Farms type={FarmType.EmotionPools} title="Staking Pools" subTitle="Stake single tokens to earn" />
            </Route>
            <Route path="/milestone-pools">
              <Farms type={FarmType.MilestonePools} title="Milestone Pools" subTitle="Stake single tokens to earn" />
            </Route>
            <Route path="/yield-farming">
              <Farms
                type={FarmType.Farming}
                title="Yield Farming"
                subTitle="Stake Liquidity Pool (LP) tokens to earn"
              />
            </Route>
            <Route path="/pitch-deck">
              <PitchDeck />
            </Route>
            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>
            <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route>

            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>

      <ToastListener />
    </Router>
  )
}

export default React.memo(App)
