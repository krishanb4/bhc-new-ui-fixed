import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Billion Happiness',
  description:
    'Billion Happiness is a blockchain community-based project for Defi, Yield Farming, Staking and NFT Marketplace.',
  image: 'https://cdn.shopify.com/s/files/1/0428/4579/8551/files/BHC_BLACK_TRANSPARENT_x70.png?v=1601482897',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'PancakeSwap Easter Battle',
    description: 'Register now for the PancakeSwap Easter battle!',
    image: 'https://pancakeswap.finance/images/easter-battle.png',
  },
}
