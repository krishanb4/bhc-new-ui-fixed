import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    farmName: 'BHC Maxi',
    image: 'maxi',
    pid: 0,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
      43114: '0xa8752333f6a6fe47323a4eDAC3D09Bb1048A0E23',
    },
    token: tokens.bhc,
    quoteToken: tokens.wavax,
    farmAddress: '0x5Dd5F08052C44AdA503415b91997cE187046F6A5',
    earn: 'BHC',
    buyURL: `https://exchange.hakuswap.com/#/swap?inputCurrency=0xa8752333f6a6fe47323a4edac3d09bb1048a0e23`,
    dualEarn: false,
    factor: 1,
    ended: false,
    isBNB: false,
    start: 'Opens in: 8 AM UTC 01/Apr/2022',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Excited',
    image: 'hps-bnb',
    pid: 1,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0xa8752333f6a6fe47323a4eDAC3D09Bb1048A0E23',
    },
    token: tokens.haku,
    quoteToken: tokens.wavax,
    farmAddress: '0xd097d943B86d108b023b5B2658b2f8990808800C',
    earn: 'HAKU',
    buyURL: `https://exchange.hakuswap.com/#/swap?inputCurrency=0xa8752333f6a6fe47323a4edac3d09bb1048a0e23`,
    dualEarn: false,
    factor: 1,
    ended: false,
    isBNB: false,
    start: 'Opens in: 8 AM UTC 01/Apr/2022',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Fast',
    image: 'fast',
    pid: 2,
    lpSymbol: 'BHC-AVAX HAKUSWAP LP',
    lpAddresses: {
      97: '',
      56: '',
      43114: '0x014C13e4e734b90cDe56f96F42E7227Fc2b2e86E',
    },
    token: tokens.bhc,
    quoteToken: tokens.wavax,
    farmAddress: '0xe3891B87204870FC26dE020fc9d92eA9848Df74f',
    earn: 'BHC',
    buyURL: `https://exchange.hakuswap.com/#/add/0xa8752333f6a6fe47323a4edac3d09bb1048a0e23/AVAX`,
    dualEarn: false,
    factor: 1,
    ended: false,
    isBNB: false,
    start: 'Opens in: 8 AM UTC 01/Apr/2022',
    category: 'farming',
    info: 'https://info.hakuswap.com/token/0xa8752333f6a6fe47323a4edac3d09bb1048a0e23'
  },
]

export default farms
