
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { styled as muiStyled } from '@mui/material/styles'

export const FCard = muiStyled('div')(({ theme }) => ({
  padding: 32,
  borderRadius: 25,
  backdropFilter: 'blur(9px)',
  backgroundColor: theme.palette.info.contrastText,
  boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.3), 0px 1px 5px 1px rgba(0, 0, 0, 0.15)',
  marginBottom: 30,
  display: 'flex',
  flexDirection: 'column',
  border: 'solid 3px #6681ca'
}))

export const Divider = styled.div`
  width: 100%;
  border-bottom: 3px solid #707070;
  margin-bottom: 32px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const CardLabel = muiStyled('div')(({ theme }) => ({
  fontWeight: 600,
  fontSize: 20,
  color: theme.palette.primary.main,
  paddingTop: 2
}))

export const CardLabelWhite = styled(Box)`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`

export const CardLabelLarge = styled.div`
  font-weight: 600;
  font-size: 25px;
  color: #6681ca;
  margin-top: 20px;
  margin-bottom: 30px;
  
`

export const CardTitle = styled.p`
  font-weight: 600;
  font-size: 25px;
  color: #6681ca;
  margin: 0;
  padding-left: 10px;
  text-align: right;
`

export const StyledLinkExternal = styled(Link)`
  font-size: 20px;
  color: #6681ca;
  display: flex;
  align-items: center;

  svg {
      margin-left: 5px;
  }
`