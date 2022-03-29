import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchanges',
        href: '/exchanges',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  {
    label: 'Emotion Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://nft.billionhappiness.finance',
  },
  /* {
    label: 'Our Shop',
    icon: 'InfoIcon',
    href: 'https://shop.billionhappiness.com',
  },

  */
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  //   status: {
  //     text: 'CLAIM',
  //     color: 'warning',
  //   },
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Contact',
      //   href: 'https://docs.pancakeswap.finance/contact-us',
      // },
      {
        label: 'Voting',
        href: '#',
      },
      {
        label: 'Certik Audited',
        href: 'https://www.certik.org/projects/billionhappiness',
      },
      {
        label: 'Github',
        href: 'https://github.com/BHCHappiness',
      },
      {
        label: 'Pitch Deck',
        href: '/pitch-deck',
      },
      {
        label: 'Blog',
        href: 'https://billionhappiness.medium.com/',
      },
    ],
  },
]

export default config
