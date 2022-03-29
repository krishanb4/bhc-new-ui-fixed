import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemTextLabel from '@mui/material/ListItemText'
import { CSSObject, Theme, styled } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import { Link } from 'react-router-dom'
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch'
import { Typography } from '@mui/material'
import MUIModal from '@mui/material/Modal'
import { isMobile } from 'react-device-detect'
import MUILink from '@mui/material/Link'
import Stack from '@mui/material/Stack'

const drawerWidth = 240

const menuItems = [
  {
    name: 'Home',
    to: '/',
    icon: 'icon-home.svg',
  },
  {
    name: 'Trade',
    to: '/exchanges',
    icon: 'icon-trade.svg',
  },
  {
    name: 'Pools',
    icon: 'icon-emotion-pools.svg',
    subItems: [
      {
        name: 'Emotion Pools',
        to: '/emotion-pools',
        icon: 'icon-fidget.svg',
      },
      {
        name: 'Milestone Pools',
        to: '/milestone-pools',
        icon: 'icon-archive.svg',
      },
    ],
  },
  {
    name: 'Yield Farming',
    to: '/yield-farming',
    icon: 'icon-farming.svg',
  },
  {
    name: 'Vaults',
    icon: 'VAULT.png',
    subTitle: 'Coming soon',
    soon: 'Soon',
  },
  {
    name: 'NFT Marketplace',
    href: 'https://nft.billionhappiness.finance/',
    icon: 'icon-nft-market.svg',
    type: 'a',
    target: '_blank',
  },
  {
    name: 'Bridge',
    icon: 'icon-bridge.svg',
    href: 'https://app.multichain.org/#/router',
    type: 'a',
    target: '_blank',
    soon: 'New',
  },
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '100%' : '50%',
  height: isMobile ? '100%' : 'auto',
  boxShadow: 24,
  border: '2px solid #fa8123',
  backgroundColor: '#1b78f2',
  borderRadius: isMobile ? 0 : 10,
  p: 4,
}

const LinkWrapper: React.FC<any> = ({ type, children, ...rest }) => {
  if (type === 'a') {
    return <a {...rest}>{children}</a>
  }
  return <Link {...rest}>{children}</Link>
}

export default function MiniDrawer({ open, afterClickMenu }) {
  const [moreMenu, setMoreMenu] = React.useState(false)
  const [subMenu, setSubMenu] = React.useState(false)
  const [BHCValue, setBHCValue] = React.useState(0)
  const [HPSValue, setHPSValue] = React.useState(0)
  const [openIntro, setOpenIntro] = React.useState<boolean>(false)

  const handleMoreMenu = () => {
    setMoreMenu(!moreMenu)
  }

  const handleSubMenu = () => {
    setSubMenu(!subMenu)
  }

  React.useEffect(() => {
    fetch('https://bsctools.xyz/bhc/api/bhc_price.php')
      .then((response) => response.json())
      .then((res) => {
        setBHCValue(res?.bhc_pancakeswap ?? 0)
        setHPSValue(res?.pcs_hps ?? 0)
      })
  }, [])

  return (
    <>
      <DrawerComponent variant="permanent" open={open}>
        <Box sx={{ overflow: 'auto', height: '100%' }}>
          <CssBaseline />
          <CustomList>
            {menuItems.map(({ name, icon, soon, subItems, ...rest }) => {
              return (
                <>
                  {!subItems ? (
                    <LinkWrapper
                      onClick={() => afterClickMenu()}
                      {...rest}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      key={name}
                    >
                      <CustomListItem>
                        <CustomListItemIcon>
                          <img src={`/images/icons/${icon}`} alt={name} />
                        </CustomListItemIcon>
                        <CustomListItemText primary={name} open={open} />
                        {soon && <NewItemChip label={soon} color="primary" />}
                      </CustomListItem>
                    </LinkWrapper>
                  ) : (
                    <CustomListItem onClick={handleSubMenu}>
                      <CustomListItemIcon>
                        <img src={`/images/icons/${icon}`} alt={name} />
                      </CustomListItemIcon>
                      <CustomListItemText primary={name} open={open} />
                      {soon && <NewItemChip label={soon} color="primary" />}
                      {subItems && (
                        <CustomListItemArrow
                          src="/images/icons/icon-arrow-down-dark.svg"
                          alt=""
                          style={{ transform: `rotate(${subMenu ? '180deg' : '0'})` }}
                        />
                      )}
                    </CustomListItem>
                  )}

                  {subItems && (
                    <Collapse in={subMenu} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {subItems.map((item) => {
                          return (
                            <LinkWrapper
                              onClick={() => afterClickMenu()}
                              {...item}
                              style={{ textDecoration: 'none', color: 'inherit' }}
                              key={name}
                            >
                              <CustomListSubItem>
                                <CustomListSubItemIcon>
                                  <img src={`/images/icons/${item.icon}`} alt={item.name} />
                                </CustomListSubItemIcon>
                                <CustomListSubItemText primary={item.name} open={open} />
                                {/* {item?.soon && <NewItemChip label={item.soon} color="primary" />} */}
                              </CustomListSubItem>
                            </LinkWrapper>
                          )
                        })}
                      </List>
                    </Collapse>
                  )}
                </>
              )
            })}

            <MoreListItem onClick={handleMoreMenu}>
              <MoreListItemIcon>
                <img
                  src="/images/icons/icon-arrow-down.svg"
                  alt=""
                  style={{ transform: `rotate(${moreMenu ? '180deg' : '0'})` }}
                />
              </MoreListItemIcon>
              <MoreListItemText open={open} primary="More" />
            </MoreListItem>
            <Collapse in={moreMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <LinkWrapper href="https://nft.billionhappiness.finance/docs/WhitePaper.pdf" target="_blank" type="a">
                  <MoreListSubItem>
                    <MoreItemIcon>
                      <img src="/images/icons/icon-whitepaper.svg" alt="whitepaper" />
                    </MoreItemIcon>
                    <MoreListItemText open={open} primary="Whitepaper" />
                  </MoreListSubItem>
                </LinkWrapper>
                <MoreListSubItem>
                  <MoreItemIcon>
                    <img src="/images/icons/icon-voting.svg" alt="Voting" />
                  </MoreItemIcon>
                  <MoreListItemText open={open} primary="Voting" />
                  <NewItemChip label="Soon" color="primary" />
                </MoreListSubItem>
                <LinkWrapper to="audit">
                  <MoreListSubItem>
                    <MoreItemIcon>
                      <img src="/images/icons/icon-certik.svg" alt="Audit" />
                    </MoreItemIcon>
                    <MoreListItemText open={open} primary="Audit" />
                  </MoreListSubItem>
                </LinkWrapper>
                <LinkWrapper href="https://billionhappiness.medium.com/" target="_blank" type="a">
                  <MoreListSubItem>
                    <MoreItemIcon>
                      <img src="/images/icons/icon-medium.svg" alt="Medium" />
                    </MoreItemIcon>
                    <MoreListItemText open={open} primary="Medium" />
                  </MoreListSubItem>
                </LinkWrapper>
                <MoreListSubItem onClick={() => setOpenIntro(true)}>
                  <MoreItemIcon>
                    <img src="/images/icons/icon-learn.svg" alt="learn more" />
                  </MoreItemIcon>
                  <MoreListItemText open={open} primary="Learn more" />
                </MoreListSubItem>
              </List>
            </Collapse>
          </CustomList>

          <CurrencyList open={open}>
            <BottomListItem>
              <BottomListItemImg src="/images/icons/icon-bcoin.png" alt="" />
              <BottomListItemText>${BHCValue}</BottomListItemText>
            </BottomListItem>
            <BottomListItem>
              <BottomListItemImg src="/images/icons/icon-hcoin.png" alt="" />
              <BottomListItemText>${HPSValue}</BottomListItemText>
            </BottomListItem>
          </CurrencyList>

          <Box sx={{ display: 'flex' }}>
            <ThemeSwitch />
            <BottomList sx={{ flexDirection: 'column', ml: 'auto', pr: 2 }} open={open}>
              <Box sx={{ display: 'flex' }}>
                <LinkWrapper href="https://twitter.com/BHC_Happiness" target="_blank" type="a">
                  <IconButton>
                    <img src="/images/icons/icon-twitter-i.svg" alt="" />
                  </IconButton>
                </LinkWrapper>

                <LinkWrapper href="https://t.me/BH_NFT_Official" target="_blank" type="a">
                  <IconButton>
                    <img src="/images/icons/icon-telegram-i.svg" alt="" />
                  </IconButton>
                </LinkWrapper>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <LangButton>
                  <img src="/images/icons/icon-lang.svg" alt="" />
                  EN
                </LangButton>
              </Box>
            </BottomList>
          </Box>
        </Box>
      </DrawerComponent>
      <IntroModal
        open={openIntro}
        onClose={() => {
          setOpenIntro(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IntroModalTitle id="modal-modal-title" variant="h2">
            Learn more
          </IntroModalTitle>
          <LearnMore>
            <ListItem disablePadding>
              <MUILink href="/learn/1" target="_blank" color="inherit">
                Give me a Quick Tour
              </MUILink>
            </ListItem>
            <ListItem disablePadding>
              <MUILink href="/learn/2" target="_blank" color="inherit">
                What is Billion Happiness
              </MUILink>
            </ListItem>
            <ListItem disablePadding>
              <MUILink href="/learn/3" target="_blank" color="inherit">
                How to set-up your wallet?
              </MUILink>
            </ListItem>
            <ListItem disablePadding>
              <MUILink href="/learn/4" target="_blank" color="inherit">
                How to Trade/Swap?
              </MUILink>
            </ListItem>
          </LearnMore>
          <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
            <Button
              onClick={() => {
                setOpenIntro(false)
              }}
              variant="contained"
              color="secondary"
              disableElevation
            >
              Close
            </Button>
          </Stack>
        </Box>
      </IntroModal>
    </>
  )
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  [theme.breakpoints.down('md')]: {
    width: 0,
    marginLeft: -1,
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 73,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    borderRadius: 0,
  },
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

const CurrencyList = styled(List, { shouldForwardProp: (prop: any) => prop !== 'open' })<any>(
  ({ theme, open }: { theme: any; open: boolean }) => ({
    ...(!open && {
      display: 'none',
    }),
    ...(!open && {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
      },
    }),
  }),
)

const BottomList = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<any>(
  ({ theme, open }: { theme: any; open: boolean }) => ({
    display: 'flex',
    ...(!open && {
      display: 'none',
    }),
    ...(!open && {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'row',
        button: {
          minWidth: 50,
        },
      },
    }),
  }),
)

const ListItemText = styled(ListItemTextLabel, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }: { theme: any; open: boolean }) => ({
    ...(!open && {
      display: 'none',
    }),
    ...(open && {
      ...openedMixin(theme),
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      [theme.breakpoints.down('md')]: {
        display: 'flex',
      },
      '& + .MuiChip-root': {
        display: 'none',
        [theme.breakpoints.down('md')]: {
          display: 'inline-flex',
        },
      },
    }),
  }),
)

const DrawerComponent = styled(Drawer)`
  & > div {
    top: 64px;
    bottom: 0;
    border-radius: 0 20px 20px 0;
    background-color: #1b78f2;
    height: auto;

    .MuiBox-root {
      &::-webkit-scrollbar {
        width: 3px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    & + div {
      max-width: 100%;
    }
  }
`

const CustomList = styled(List)`
  padding-top: 20px;
`

const CustomListItem = styled(ListItemButton)`
  padding-left: 6px;
  padding-right: 6px;

  & + a {
    margin-top: 20px;
  }
`

const CustomListItemIcon = styled('div')`
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 32px;
    height: 32px;
  }
`

const CustomListItemText = styled(ListItemText) <any>`
  background: #fff;
  padding: 4px 0 4px 16px;
  margin-left: -8px;
  border-radius: 0 25px 25px 0;
`

const CustomListSubItem = styled(ListItemButton)`
  padding-left: 35px;
  padding-right: 6px;

  & + a {
    margin-top: 20px;
  }
`

const CustomListSubItemIcon = styled('div')`
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: rgb(0, 0, 0, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
`

const CustomListSubItemText = styled(ListItemText) <any>`
  padding: 4px 0 4px 16px;
  margin-left: -8px;
  border-radius: 0 25px 25px 0;
`

const CustomListItemArrow = styled('img')`
  width: 12px;
  position: absolute;
  right: 20px;
  transition: 0.2s all ease-in-out;
`

const NewItemChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  right: 15,
  top: 30,
  padding: '1px 8px',
  height: 18,
  minWidth: 18,
  fontSize: 10,
  lineHeight: 1,
  color: '#fff',
  backgroundColor: '#000',
  '.MuiChip-label': {
    padding: 0,
  },
}))

const MoreListItem = styled(ListItemButton)`
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 6px;
  padding-right: 6px;
  margin-top: 20px;
`

const MoreListItemIcon = styled('div')`
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 14px;
    transition: 0.2s all ease-in-out;
  }
`

const MoreListItemText = styled(ListItemText) <any>`
  padding: 4px 0 4px 12px;
  margin-left: -8px;
  border-radius: 0 25px 25px 0;

  & + .MuiChip-root {
    top: 20px;
  }
`

const MoreListSubItem = styled(ListItemButton)`
  padding-left: 14px;

  & + a {
    margin-top: 20px;
  }
`

const MoreItemIcon = styled('div')`
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
`

const BottomListItem = styled(ListItem)`
  padding: 0 18px 0 18px;

  & + li {
    margin-top: 5px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 50px 0 50px;
  }
`

const BottomListItemImg = styled('img')`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`

const BottomListItemText = styled<any>('p')`
  font-weight: 600;
  font-size: 15px;
  color: #1e1e1e;
  margin: 0;
`

const LangButton = styled(IconButton)`
  font-size: 18px;
  color: #1e1e1e;

  img {
    margin-right: 5px;
  }
`

const IntroModal = styled(MUIModal)(({ theme }) => ({
  '.MuiBox-root': {
    padding: 32,
    borderRadius: 25,
    backdropFilter: 'blur(9px)',
    backgroundColor: theme.palette.info.dark,
    border: `1px solid ${theme.palette.info.light}`,
  },
}))

const IntroModalTitle = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: theme.palette.primary.main,
    fontSize: 36,
  },
}))

const LearnMore = styled(List)(({ theme }) => ({
  '&.MuiList-root': {
    marginTop: 12,
    li: {
      '& + li': {
        marginTop: 16,
      },
      a: {
        color: theme.palette.primary.contrastText,
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
        fontSize: 18,
      },
    },
  },
}))
