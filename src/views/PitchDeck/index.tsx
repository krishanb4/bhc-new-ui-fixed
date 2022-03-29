import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

const StyledHero = styled.div`
  border-bottom: 2px solid #e84142;
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const StyledExchanges = styled.div`
  border-radius: 20px;
  padding: 50px 15px 20px 15px;
  background: white;
  width: 30%;
  text-align: center;
`

const StyledOuter = styled.div`
  height: 200px;
  position: relative;
`

const StyledInner = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%
`

const StyledFooter = styled.div`
  margin-top: 60px;
  margin-left: -15px;
  margin-right: -15px;
  border-top: 1px solid #dcdcdc;
  padding-top: 10px;
  font-size: 25px;
  color: #e84142;
  font-weight: 400;
`

const BtnStyle = {
  color: "white",
  background: "#e84142",
  borderRadius: "10px",
  fontWeight: 100,
  fontSize: "26px"
}


const CustomExchanges = () => {
  const TranslateString = useI18n()

  function handleClick(link) {
    alert(`redirect to ${link}`);
  }

  return (
    <Page>
      <StyledHero>
        <Heading as="h1" size="xxl" color="#e84142">
          {TranslateString(999, 'Pitch Deck')}
        </Heading>
      </StyledHero>

      <embed src="BillionHapppinessPD.pdf" width="100%" height="700px" />

    </Page>
  )
}

export default CustomExchanges
