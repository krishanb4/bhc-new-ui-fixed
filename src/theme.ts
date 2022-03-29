import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: '#fa8123',
      contrastText: '#000',
      ...(mode === 'dark' && {
        main: '#fa8123',
        contrastText: '#fff',
      }),
    },
    secondary: {
      main: '#000',
      contrastText: '#fff',
      ...(mode === 'dark' && {
        main: '#fff',
        contrastText: '#000',
      }),
    },
    info: {
      main: 'rgba(255, 255, 255, 0.14)',
      contrastText: 'rgba(255, 255, 255, 0.14)',
      light: '#dddddd',
      dark: '#ffffff',
      ...(mode === 'dark' && {
        main: '#000',
        light: '#272727',
        dark: '#0e0e0e',
      }),
    },
    text: {
      primary: '#000',
      secondary: '#ddd',
      ...(mode === 'dark' && {
        primary: '#000',
        secondary: '#ddd',
      }),
    },
  },
})

const useTheme = (isDark: boolean | null) => {
  return createTheme(getDesignTokens(isDark ? 'dark' : 'light'))
}

export default useTheme
