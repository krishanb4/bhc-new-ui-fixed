import { createTheme } from '@mui/material'

const lightPalette = {
  common: {
    black: '#010101',
    gray: '#808080',
    grayLight: '#c3c3c3',
    grayBackground: '#F9F9F9',
    grayButtonBackground: '#FBFBFB',
    menuBorder: '#F2F2F2',
    tabBarBorder: '#E9E8E9',
    white: '#ffffff',
    sliderBackground: '#FBFCFD',
    red: '#dc004e',
  },
  primary: {
    light: '#FC984A',
    main: '#FA8123',
    dark: '#EB7417',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#010101',
  },
  type: 'light',
}
const darkPalette = {
  common: {
    black: '#ffffff',
    gray: '#c3c3c3',
    grayLight: '#808080',
    white: '#010101',
    menuBorder: '#333333',
    tabBarBorder: '#E9E8E9',
    sliderBackground: '#111111',
    red: '#dc004e',
  },
  primary: {
    light: '#FC984A',
    main: '#FA8123',
    dark: '#EB7417',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#ffffff',
  },
  type: 'dark',
}

const getTypography = () => {
  return {
    raleway: {
      fontFamily: "'Raleway', sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightSemiBold: 600,
      fontWeightBold: 700,
      fontWeightExtraBold: 800,
      fontWeightBlack: 900,
    },
    roboto: {
      fontFamily: "'Roboto', sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      fontWeightBlack: 900,
    },
    h1: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: '3.125rem',
      fontWeight: 900,

      '@media (max-width: 599.95px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: '2.8125rem',
      fontWeight: 900,
    },
    h3: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: '1.875rem',
      fontWeight: 900,
    },
    h4: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: '1.375rem',
      fontWeight: 900,
    },
    h5: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: '1rem',
      fontWeight: 900,
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1.125rem',
      fontWeight: 400,
      // lineHeight: '1.75rem',
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
  }
}

const getOverrides = (mode: string) => {
  return {
    // Tabs
    MuiTab: {
      root: {
        minWidth: '115px !important',
        textTransform: 'none',
      },
    },
    MuiTabs: {
      root: {
        minHeight: '62px',
        alignItems: 'center',
      },
      indicator: {
        display: 'none',
      },
    },

    // Input
    MuiInput: {
      root: {
        fontSize: '1.25rem',
      },
      input: {
        padding: '14px 0 15px',
      },
      multiline: {
        padding: 0,
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: '1rem',
        marginTop: 10,
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: ' translate(0, 1.5px) scale(0.9)',
      },
    },
    // Select
    MuiNativeSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
    },

    // Accordion
    MuiAccordion: {
      root: {
        boxShadow: 'none',
        backgroundColor: mode === 'light' ? lightPalette.common.white : darkPalette.common.white,
        borderTop: `1px solid ${mode === 'light' ? lightPalette.common.menuBorder : darkPalette.common.menuBorder}`,
        borderRadius: '0 !important',
        padding: '20px 0',

        '&:before': {
          top: 0,
          height: 0,
        },
        '&:last-child': {
          borderBottom: `1px solid ${
            mode === 'light' ? lightPalette.common.menuBorder : darkPalette.common.menuBorder
          }`,
        },
      },
    },
    MuiAccordionSummary: {
      root: {
        padding: 0,
      },
      content: {
        margin: '0 !important',
      },
    },
    MuiAccordionDetails: {
      root: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
      },
    },

    // Globals styles
    MuiCssBaseline: {
      body: {
        height: '100%',
        overflow: 'hidden',
        backgroundImage: `url('/images/dark-background.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        // 'background-color': mode === 'light' ? lightPalette.common.white : darkPalette.common.white,

        // '@media (max-width: 960px)': {
        //   overflow: 'scroll',
        // },
      },
      '@global': {
        '*': {
          '-ms-overflow-style': 'none',
        },
        '::-webkit-scrollbar': {
          display: 'none',
        },
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          overflow: 'hidden',
          backgroundImage: `url('/images/dark-background.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundAttachment: 'fixed',
          // 'background-color': mode === 'light' ? lightPalette.common.white : darkPalette.common.white,

          // '@media (max-width: 960px)': {
          //   overflow: 'scroll',
          // },
        },
        // '#root': {
        //   height: '100%',
        //   'background-color': mode === 'light' ? lightPalette.common.white : darkPalette.common.white,
        // },
      },
    },
  }
}

export default function getMuiTheme(mode: string) {
  return createTheme({
    // @ts-ignore
    overrides: getOverrides(mode),
    typography: getTypography(),
    palette: mode === 'light' ? lightPalette : darkPalette,
  })
}
