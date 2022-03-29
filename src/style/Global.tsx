import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
     background-image: url('/images/${(props: any) => props.theme.isDark ? 'dark' : 'light'}-background.jpg');
  }

  body iframe {
    display: none;
  }

`

export default GlobalStyle
