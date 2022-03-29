import React, { useContext } from 'react'
import { ModalProvider } from '@pancakeswap-libs/uikit'
import { ThemeProvider } from '@mui/material/styles'
import { Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { getLibrary } from 'utils/web3React'
import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider, ThemeContext } from 'contexts/ThemeContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import store from 'state'

import useTheme from './theme'

const AppThemeProvider: React.FC = ({ children }) => {
  const { isDark } = useContext(ThemeContext)
  const theme = useTheme(isDark)
  return (
    <ThemeProvider theme={theme}>
      <LanguageContextProvider>
        <RefreshContextProvider>
          <ModalProvider>{children}</ModalProvider>
        </RefreshContextProvider>
      </LanguageContextProvider>
    </ThemeProvider>
  )
}

const Providers: React.FC = (props) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <HelmetProvider>
          <ThemeContextProvider>
            <AppThemeProvider {...props} />
          </ThemeContextProvider>
        </HelmetProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
