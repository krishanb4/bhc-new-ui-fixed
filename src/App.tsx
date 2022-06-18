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

window.prices = {
  '0xcaC3b7DE7D5c44E8E1048241C7dE29a61b5C3E7d': 65,
  '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4': 78,
  '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D': 0.84,
  '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47': 1,
  '0x4437743ac02957068995c48E08465E0EE1769fBE': 2,
  '0x790Be81C3cA0e53974bE2688cDb954732C9862e1': 1.4,
  '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0': 14.8,
  '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340': 0.28,
  '0xfb62ae373aca027177d1c18ee0862817f9080d08': 8.08,
  '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': 411,
  '0x9573c88aE3e37508f87649f87c4dd5373C9F31e0': 3,
  '0x851db01b337ee3e5ab161ad04356816f09ea01dc': 0,
  '0xd46E7f33f8788f87D6017074dC4e4d781D3df91E': 0,
  '0xe9e7cea3dedca5984780bafc599bd69add087d56': 1,
  '0xE4FAE3Faa8300810C835970b9187c268f55D998F': 0,
  '0xbA2aE424d960c26247Dd6c32edC70B295c744C43': 0,
  '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe': 0,
  '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c': 0,
  '0xc9d53a339f3c22e016c6fa1e3eb85ac32c75fed2': 0, // HPSv2
}

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
            <Route path="/emotion-pools">
              <Farms type={FarmType.EmotionPools} title="Emotion Pools" subTitle="Stake single tokens to earn" />
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
