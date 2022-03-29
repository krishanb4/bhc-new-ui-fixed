/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from 'react'
import { Button as PButton, Menu as UikitMenu, Modal, Text, useModal } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { useLocation } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd } from 'state/hooks'
import Drawer from '../../NewDrawyer'
import config from './config'

const priceImagesStyle = {
  width: '20%',
  margin: '2px',
}

const ChainCard = ({ title, link }) => {
  return (
    <a target="_blank" rel="noreferrer" href={link}>
      <PButton
        variant="tertiary"
        style={{
          justifyContent: 'space-between',
          border: '3px solid #fa8123',
          padding: '45px 32px',
          width: '100%',
          marginBottom: 20,
        }}
      >
        <Text color="primary" mr="16px" bold>
          {title}
        </Text>
        {title === 'BSC' ? (
          <img src="images/bsc.png" alt="bsc logo" style={priceImagesStyle} />
        ) : ('')}
        {title === 'Fantom' ? (
          <img src="images/ftm.png" alt="ftm logo" style={priceImagesStyle} />
        ) : ('')}
        {title === 'Avalanche' ? (
          <img src="images/avx.png" alt="avx logo" style={priceImagesStyle} />) : ('')}
      </PButton>
    </a>
  )
}

const chains = [
  {
    title: 'BSC',
    link: '#',
  },
  {
    title: 'Fantom',
    link: 'https://fantom.billionhappiness.finance',
  },
  {
    title: 'Avalanche',
    link: 'https://avalanche.billionhappiness.finance',
  },
]

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const [open, setOpen] = useState<boolean>(true)

  const [onPresent] = useModal(
    <>
      <Modal title="Switch Network" hideCloseButton>
        {chains.map((i) => (
          <ChainCard {...i} key={i.title} />
        ))}
      </Modal>
    </>,
  )

  const handleDrawer = () => {
    setOpen((prevState: boolean) => !prevState)
  }

  return (
    <>
      <UikitMenu
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        panel={<Drawer afterClickMenu={() => (isMobile ? handleDrawer() : () => { })} open={open} />}
        account={account}
        extraButtons={[
          <PButton onClick={() => onPresent()} scale="sm">
            BSC
          </PButton>,
        ]}
        menuButton={
          <>
            <IconButton
              className="menuBtn"
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </>
        }
        login={login}
        logout={logout}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={selectedLanguage && selectedLanguage.code}
        langs={allLanguages}
        setLang={setSelectedLanguage}
        cakePriceUsd={cakePriceUsd}
        links={config}
        {...props}
      />
    </>
  )
}

export default Menu
