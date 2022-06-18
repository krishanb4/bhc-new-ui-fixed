import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    farmName: 'Feeling Love',
    image: 'HPS',
    pid: 39,
    lpSymbol: 'HPSv2',
    lpAddresses: {
      97: '',
      56: '0xc9d53a339f3c22e016c6fa1e3eb85ac32c75fed2',
    },
    token: tokens.hpsv2,
    quoteToken: tokens.wbnb,
    farmAddress: '0xA4e5854C6a01C50b4951534233A38718127D0335',
    earn: 'HPSv2',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hpsv2.address['56']}`,
    dualEarn: false,
    factor: 1,
    ended: false,
    isBNB: false,
    start: 'Opens in: 8 AM UTC 20/Jun/2022',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Awesome',
    image: 'bhc-new',
    pid: 38,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0x5Ec9CB98CB4DB83a7941e99fAf15268F13E8dA2b',
    earn: 'HPS',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 20/April/2022',
    ended: false,
    isBNB: false,
    locked: false,
    info: `#`,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Sweet',
    image: 'sweet',
    pid: 37,
    lpSymbol: 'BHC-BNB Pancake LP',
    lpAddresses: {
      97: '',
      56: '0x851db01b337ee3e5ab161ad04356816f09ea01dc',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0x5A3B3c32b3095c86a3b40444168B642061943Bcf',
    earn: 'BHC',
    buyURL: `https://pancakeswap.finance/add/BNB/${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 20/April/2022',
    ended: false,
    isBNB: false,
    locked: false,
    info: `https://pancakeswap.finance/info/pair/0x851db01b337ee3e5ab161ad04356816f09ea01dc`,
    category: 'farming',
  },
  {
    farmName: 'Feeling Healthy',
    image: 'png_20220318_230313_0000',
    pid: 36,
    lpSymbol: 'WIRTUAL',
    lpAddresses: {
      97: '',
      56: '0xa19d3f4219e2ed6dc1cb595db20f70b8b6866734',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0xF3d1614df89a6EE53Da0782b4A148d0Be0fBd44F',
    earn: 'BHC',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.wirtual.address['56']}`,
    dualEarn: false,
    factor: 1,
    ended: false,
    isBNB: false,
    start: 'Opens in: 8 AM UTC 26/Mar/2022',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Fit',
    image: 'fast',
    pid: 35,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.wirtual,
    quoteToken: tokens.wbnb,
    farmAddress: '0x9C5856248c4A76cd327209A45e652caad6e04fF4',
    earn: 'WIRTUAL',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    ended: false,
    isBNB: false,
    start: 'Opens in: 8 AM UTC 26/Mar/2022',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Love',
    image: 'HPS',
    pid: 34,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.hps,
    quoteToken: tokens.wbnb,
    farmAddress: '0x57D8e8286bBE4c783b8913Ef7B38E2c024DcC951',
    earn: 'HPS',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 1,
    ended: true,
    isBNB: false,
    start: 'Opens in: 8 AM UTC 14/Feb/2022',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Excited',
    pid: 33,
    lpSymbol: 'HPS-BNB',
    image: 'HPS-BNB',
    lpAddresses: {
      97: '',
      56: '0x219686EA455297aa6A052c0d41CEfa0c4784549E',
    },
    token: tokens.hps,
    quoteToken: tokens.wbnb,
    farmAddress: '0x57F3D9181EfAE6a683231CdFac04108a693cC0cb',
    earn: 'HPS',
    buyURL: `https://pancakeswap.finance/add/0xeda21b525ac789eab1a08ef2404dd8505ffb973d/BNB`,
    dualEarn: false,
    factor: 1,
    ended: false,
    isBNB: false,
    info: 'https://pancakeswap.finance/info/pool/0x219686ea455297aa6a052c0d41cefa0c4784549e',
    start: 'Opens in: 8 AM UTC 14/Feb/2022',
    category: 'farming',
  },
  {
    farmName: 'Feeling Wealthy',
    image: 'money_face_emoji',
    pid: 32,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0x67f539d09F358c7DB8Cd7Bf5093B497694E3f5a5',
    earn: 'BHC',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.busd.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 20/Jan/2022',
    ended: false,
    isBNB: false,
    locked: false,
    info: '',
    balanceCheck: true,
    balanceConstraints: [
      { token: tokens.bhc, limit: 5 },
      { token: tokens.hps, limit: 100 },
    ],
    limitCheck: true,
    limit: 50000,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Healed',
    image: 'mending-heart_2764-fe0f-200d-1fa79',
    pid: 31,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.cure,
    quoteToken: tokens.wbnb,
    farmAddress: '0x942A683eFD49C4e2a56057fDBd60B62F9d361AB8',
    earn: 'CURE',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 26/Dec/2021',
    ended: true,
    isBNB: false,
    locked: false,
    info: '',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Ready',
    image: 'game',
    pid: 29,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.gmr,
    quoteToken: tokens.wbnb,
    farmAddress: '0x3cD0E13f03aA51e65F5b1D9602701f75d09c92a7',
    earn: 'GMR',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 14/Dec/2021',
    ended: true,
    isBNB: false,
    locked: false,
    info: '',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Game',
    image: 'swords',
    pid: 30,
    lpSymbol: 'GMR',
    lpAddresses: {
      97: '',
      56: '0xADCa52302e0a6c2d5D68EDCdB4Ac75DeB5466884',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0xDB8079E3cFAE20baC5AB1eD247D1e017EE40D232',
    earn: 'BHC',
    buyURL: `#`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 14/Dec/2021',
    ended: true,
    isBNB: false,
    locked: false,
    info: '',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Sparkly',
    image: 'sparkly',
    pid: 27,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.srkb,
    quoteToken: tokens.wbnb,
    farmAddress: '0x0ccE1439Fd226906c2048C9c602175C96fB85173',
    earn: 'SRKb',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 28/Nov/2021',
    ended: true,
    isBNB: false,
    locked: false,
    info: '',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Driven',
    image: 'racing',
    pid: 28,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.sfuel,
    quoteToken: tokens.wbnb,
    farmAddress: '0xcb84eB80b33C79a7971C079DF87Dc6698aa1d5da',
    earn: 'SFUEL',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 28/Nov/2021',
    ended: true,
    isBNB: false,
    locked: false,
    info: '',
    category: 'emotional',
  },
  {
    farmName: 'BHC Milestone Pool 1',
    image: '4_grande',
    pid: 17,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.ada,
    quoteToken: tokens.wbnb,
    farmAddress: '0x7997A1B7E5298742F1714C400419d8f8C3583ae6',
    earn: 'ADA',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Coming Soon!',
    ended: true,
    isBNB: false,
    locked: false,
    info: '',
    category: 'milestone',
  },
  {
    farmName: 'HPS Milestone Pool 1 (OLD)',
    image: 'medal',
    pid: 23,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.cate,
    quoteToken: tokens.wbnb,
    farmAddress: '0xb08dB357B3E300Bbf7f89C73187E94177D59AD71',
    earn: 'CATE',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Coming Soon!',
    ended: true,
    isBNB: false,
    locked: false,
    info: '',
    category: 'milestone',
  },
  {
    farmName: 'HPS Milestone Pool 1',
    image: 'medal',
    pid: 25,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.bmon,
    quoteToken: tokens.wbnb,
    farmAddress: '0x82d4294baA70DF76B719d5106Fcb50C86bBfdea2',
    earn: 'BMON',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Coming Soon!',
    ended: true,
    isBNB: false,
    locked: false,
    info: '',
    category: 'milestone',
  },
  // {
  //   farmName: 'BHC Milestone Pool 2',
  //   image: '4_grande',
  //   pid: 18,
  //   lpSymbol: 'BHC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
  //   },
  //   token: tokens.bmon,
  //   quoteToken: tokens.wbnb,
  //   farmAddress: '0xBf1712AdfCD875F7DCfb054df4933cBdc8f81d64',
  //   earn: 'BMON',
  //   buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
  //   dualEarn: false,
  //   factor: 1,
  //   start: 'Coming Soon!',
  //   ended: false,
  //   isBNB: false,
  //   locked: false,
  //   info: '',

  // },
  // {
  //   farmName: 'HPS Milestone Pool 2',
  //   image: 'medal',
  //   pid: 24,
  //   lpSymbol: 'HPS',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
  //   },
  //   token: tokens.busd,
  //   quoteToken: tokens.wbnb,
  //   farmAddress: '0xfB8C0eAd4fe2C682A1AC34d57A4F2281922812C3',
  //   earn: 'BUSD',
  //   buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
  //   dualEarn: false,
  //   factor: 1,
  //   start: 'Coming Soon!',
  //   ended: false,
  //   isBNB: false,
  //   locked: false,
  //   info: '',
  // },
  // {
  //   farmName: 'BHC Milestone Pool 3',
  //   image: '4_grande',
  //   pid: 19,
  //   lpSymbol: 'BHC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
  //   },
  //   token: tokens.doge,
  //   quoteToken: tokens.wbnb,
  //   farmAddress: '0x15921c21652Afea747f0742e8E37f8b589c27F67',
  //   earn: 'DOGE',
  //   buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
  //   dualEarn: false,
  //   factor: 1,
  //   start: 'Coming Soon!',
  //   ended: false,
  //   isBNB: false,
  //   locked: false,
  //   info: '',
  // },
  // {
  //   farmName: 'HPS Milestone Pool 3',
  //   image: 'medal',
  //   pid: 26,
  //   lpSymbol: 'HPS',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
  //   },
  //   token: tokens.ada,
  //   quoteToken: tokens.wbnb,
  //   farmAddress: '0x8d8610D73B401f84Aec7950Eb974129976001871',
  //   earn: 'ADA',
  //   buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
  //   dualEarn: false,
  //   factor: 1,
  //   start: 'Coming Soon!',
  //   ended: false,
  //   isBNB: false,
  //   locked: false,
  //   info: '',
  // },
  // {
  //   farmName: 'BHC Milestone Pool 4',
  //   image: '4_grande',
  //   pid: 20,
  //   lpSymbol: 'BHC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
  //   },
  //   token: tokens.xrp,
  //   quoteToken: tokens.wbnb,
  //   farmAddress: '0xa058b064fF70300866B78E28236A92969acb820F',
  //   earn: 'XRP',
  //   buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
  //   dualEarn: false,
  //   factor: 1,
  //   start: 'Coming Soon!',
  //   ended: false,
  //   isBNB: false,
  //   locked: false,
  //   info: '',
  // },
  // {
  //   farmName: 'BHC Milestone Pool 5',
  //   image: '4_grande',
  //   pid: 21,
  //   lpSymbol: 'BHC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
  //   },
  //   token: tokens.wbnb,
  //   quoteToken: tokens.wbnb,
  //   farmAddress: '0xC1Ac2e17cd76fD10c5373EdAA1b25c05aA2a0102',
  //   earn: 'BNB',
  //   buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
  //   dualEarn: false,
  //   factor: 1,
  //   start: 'Coming Soon!',
  //   ended: false,
  //   isBNB: true,
  //   locked: false,
  //   info: '',
  // },
  // {
  //   farmName: 'BHC Milestone Pool 6',
  //   image: '4_grande',
  //   pid: 22,
  //   lpSymbol: 'BHC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
  //   },
  //   token: tokens.btcb,
  //   quoteToken: tokens.wbnb,
  //   farmAddress: '0x645909034846331cb5B13CC97B5517206514cb22',
  //   earn: 'BTCB',
  //   buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
  //   dualEarn: false,
  //   factor: 1,
  //   start: 'Coming Soon!',
  //   ended: false,
  //   isBNB: false,
  //   locked: false,
  //   info: '',
  // },
  {
    farmName: 'Feeling Sweet',
    image: 'sweet',
    pid: 16,
    lpSymbol: 'BHC-BNB Pancake LP',
    lpAddresses: {
      97: '',
      56: '0x851db01b337ee3e5ab161ad04356816f09ea01dc',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0xC5c482a4Ed34b80B861B4e6Eb28664a46bd3eC8B',
    earn: 'BHC',
    buyURL: `https://pancakeswap.finance/add/BNB/${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 21/Oct/2021',
    ended: true,
    isBNB: false,
    locked: false,
    info: `https://pancakeswap.finance/info/pair/0x851db01b337ee3e5ab161ad04356816f09ea01dc`,
    category: 'farming',
  },
  {
    farmName: 'BHC Maxi',
    image: 'maxi',
    pid: 15,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0xD8D1F26F014deECB920B29F183B21a0b083e4A92',
    earn: 'BHC',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 26/Dec/2021',
    ended: false,
    isBNB: false,
    locked: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Stable',
    image: 'stable',
    pid: 14,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    farmAddress: '0xE40525c866Ab074e4103e5d26570Dc61f1729B6d',
    earn: 'BUSD',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 20/Oct/2021',
    ended: true,
    isBNB: false,
    locked: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Playful',
    image: 'playful',
    pid: 13,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.moni,
    quoteToken: tokens.wbnb,
    farmAddress: '0xa4712bd37cdE563bDfccCfa6DE5E5c2b1Da5572B',
    earn: 'MONI',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 20/Oct/2021',
    ended: true,
    isBNB: false,
    locked: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Loyal',
    image: 'loyal',
    pid: 12,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0xE9bFC901644B85161BAFa103ecf4478a87D398E1',
    earn: 'BHC',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 20/Oct/2021',
    ended: false,
    isBNB: false,
    locked: true,
    stakeNote: '(Locked Until 20 Oct 2022)',
    category: 'emotional',
  },
  {
    farmName: 'Anniversary Pool HPS',
    image: 'anniv',
    pid: 11,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.wbnb,
    quoteToken: tokens.wbnb,
    farmAddress: '0xFe76b03CA850B890e0A9952004c5DfF5ed9A3898',
    earn: 'BNB',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 14/Sep/2021',
    ended: true,
    isBNB: true,
    locked: false,
    stakeNote: '',
    category: 'emotional',
  },
  {
    farmName: 'Anniversary Pool BHC',
    image: 'Anniv',
    pid: 10,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.hps,
    quoteToken: tokens.wbnb,
    farmAddress: '0x9f4A42656648D03bD58beC9761259E76671182c0',
    earn: 'HPS',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 14/Sep/2021',
    ended: true,
    isBNB: false,
    locked: true,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Hot',
    image: 'hot',
    pid: 9,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0xfA8BcFde7DFf0FE14756F6058458AEE7523472dd',
    earn: 'BMON',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 0.09,
    start: 'Opens in: 8 AM UTC 25/Aug/2021',
    ended: true,
    isBNB: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Hyped',
    image: 'hyped',
    pid: 8,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.hps,
    quoteToken: tokens.wbnb,
    farmAddress: '0xd0f77dD2Ff847590D2b748F2B68df9EbA6D9f775',
    earn: 'AXS',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 6/Aug/2021',
    ended: true,
    isBNB: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Brand New',
    image: 'brandnew',
    pid: 7,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0x9226d465fDEC44F7080dDb6Fe6e1CC8fBA5f76C0',
    earn: 'DPET',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 28/July/2021',
    ended: true,
    isBNB: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Energized',
    image: 'grate',
    pid: 5,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.brew,
    quoteToken: tokens.wbnb,
    farmAddress: '0x662075454d711311981Eeef8F72CA7e07213b72C',
    earn: 'BREW',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Opens in: 8 AM UTC 24/Jun/2021',
    ended: true,
    isBNB: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Grateful',
    image: 'energ',
    pid: 6,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0x4a3999048eb6AF45dF67Fd0fF917354cD7efbD6D',
    earn: 'BHC',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 1,
    start: 'Coming Soon...!',
    ended: true,
    isBNB: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Excited',
    pid: 1,
    lpSymbol: 'HPS-BNB',
    image: 'HPS-BNB',
    lpAddresses: {
      97: '',
      56: '0xcaC3b7DE7D5c44E8E1048241C7dE29a61b5C3E7d',
    },
    token: tokens.hps,
    quoteToken: tokens.wbnb,
    farmAddress: '0xcC16f9Ca629b140d46886A82FeaF586A5532BD99',
    earn: 'HPS',
    buyURL: `https://app.apeswap.finance/add/BNB/${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 2.61,
    ended: true,
    isBNB: false,
    info: 'https://info.julswap.com/pair/0xcaC3b7DE7D5c44E8E1048241C7dE29a61b5C3E7d',
    category: 'emotional',
  },
  {
    farmName: 'Feeling Happy',
    image: 'BHC',
    pid: 3,
    lpSymbol: 'BHC',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0xF867ea84d04C79Bbd812E76F3eCeDF3d053fFf91',
    earn: 'BHC',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: false,
    factor: 0.16,
    ended: true,
    isBNB: false,
    category: 'emotional',
  },

  {
    pid: 4,
    lpSymbol: 'BHC',
    image: '4th-pool-bhc',
    farmName: 'Feeling Awesome',
    lpAddresses: {
      97: '',
      56: '0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4',
    },
    token: tokens.hps,
    token2: tokens.ada,
    token3: tokens.fts,
    quoteToken: tokens.wbnb,
    farmAddress: '0x3aBb15d19047dC7e28ED1AbF7aD7D4495E23995d',
    earn: 'HPS',
    earn2: 'ADA',
    earn3: 'FTS',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.bhc.address['56']}`,
    dualEarn: true,
    factor: 1,
    ended: true,
    isBNB: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling Loved',
    image: 'HPS',
    pid: 2,
    lpSymbol: 'HPS',
    lpAddresses: {
      97: '',
      56: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    },
    token: tokens.hps,
    quoteToken: tokens.wbnb,
    farmAddress: '0xDC284d444A5Ec2B594267F29FFB8eB7Fde76B8fD',
    earn: 'HPS',
    buyURL: `https://app.apeswap.finance/swap?outputCurrency=${tokens.hps.address['56']}`,
    dualEarn: false,
    factor: 0.88,
    ended: true,
    isBNB: false,
    category: 'emotional',
  },
  {
    farmName: 'Feeling High',
    image: 'high',
    pid: 0,
    lpSymbol: 'BHC-BNB StreetSwap LP',
    lpAddresses: {
      97: '',
      56: '0xd46E7f33f8788f87D6017074dC4e4d781D3df91E',
    },
    token: tokens.bhc,
    quoteToken: tokens.wbnb,
    farmAddress: '0x1886E1d6f28f89E3756c06E91cb31b628569e05D',
    earn: 'BHC',
    buyURL: '#',
    dualEarn: false,
    factor: 0,
    ended: true,
    isBNB: false,
    info: '#',
    category: 'farming',
  },
]

export default farms
