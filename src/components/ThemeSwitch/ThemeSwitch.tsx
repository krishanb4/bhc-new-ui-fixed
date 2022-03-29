import React, { useContext } from 'react'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import { ThemeContext } from 'contexts/ThemeContext'

const ThemeSwitch = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext)

  return <DarkLightSwitch onChange={toggleTheme} checked={isDark} />
}

export default ThemeSwitch

const DarkLightSwitch = styled(Switch, { shouldForwardProp: (prop) => prop !== 'open' })<any>(
  ({ theme, open }: { theme: any; open: boolean }) => ({
    transform: 'rotate(90deg)',
    width: 58,
    height: 39,
    overflow: 'hidden',
    padding: '7px 5px',
    marginTop: 12,
    ...(!open && {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.down('md')]: {
        marginLeft: 7,
      },
    }),
    '& .MuiSwitch-track': {
      borderRadius: 12,
      background: '#1E1E1E !important',
      opacity: 1,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: 'url(/images/icons/icon-sun.svg)',
        backgroundRepeat: 'no-repeat',
        left: 12,
      },
      '&:after': {
        backgroundImage: 'url(/images/icons/icon-moon.svg)',
        backgroundRepeat: 'no-repeat',
        right: 12,
      },
    },
    '& .Mui-checked + .MuiSwitch-track': {
      opacity: '1 !important',
      border: '1px solid #fba86f',
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
      background: 'white',
    },
  }),
)
