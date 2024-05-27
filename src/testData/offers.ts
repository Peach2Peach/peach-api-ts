import { BuyOffer, FundingStatus, SellOffer } from '../@types/offer';
import { getDefaultFundingStatus } from './fundingStatus';
import { twintDataHashes, validSEPADataHashes } from './paymentData';
import { defaultUser } from './userData';


const BITCOIN_BLOCKS_IN_4_DAYS = 576;
const LIQUID_BLOCKS_IN_4_DAYS = 5760;

const fundingStatusHelper = (
  fundingStatus: Omit<FundingStatus, 'expiry'>
): Pick<SellOffer, 'funding'|'fundingLiquid'> => ({
  funding: { ...fundingStatus, expiry: BITCOIN_BLOCKS_IN_4_DAYS },
  fundingLiquid: { ...fundingStatus, expiry: LIQUID_BLOCKS_IN_4_DAYS },
})

export const sellOffer: SellOffer = {
  creationDate: new Date('2022-03-08T11:41:07.245Z'),
  publishingDate: new Date('2022-03-08T11:41:07.245Z'),
  lastModified: new Date('2022-03-08T11:41:07.245Z'),
  id: '38',
  online: true,
  type: 'ask',
  escrowType: 'bitcoin',
  fundingMechanism: 'bitcoin',
  escrow: 'bcrt1qd82dyvujm7527admrrwqhwhapyrg3l7px4vyz83adlgk3u8zlgasqf6g2a',
  escrows: {
    bitcoin: 'bcrt1qd82dyvujm7527admrrwqhwhapyrg3l7px4vyz83adlgk3u8zlgasqf6g2a',
    liquid: 'ert1qrxl2jwt08lnzxn77hrtdlhrqtr8q9vj2tucmxfw9tla59ws6jxwqw0qh3e',
  },
  meansOfPayment: {
    EUR: ['sepa'],
  },
  paymentData: {
    sepa: { hashes: validSEPADataHashes },
  },
  ...fundingStatusHelper(getDefaultFundingStatus('38')),
  amount: 250000,
  premium: 1.5,
  matches: [],
  doubleMatched: false,
  returnAddress: 'bcrt1q70z7vw93cxs6jx7nav9cmcn5qvlv362qfudnqmz9fnk2hjvz5nus4c0fuh',
  refunded: false,
  released: false,
  tradeStatus: 'searchingForPeer',
  freeTrade: false,
  escrowFee: 0,
  user: {
    id: '1',
    creationDate: new Date('2022-03-08T11:41:07.245Z'),
    openedTrades: 0,
    canceledTrades: 0,
    trades: 0,
    rating: 0,
    userRating: 0,
    historyRating: 0,
    recentRating: 0,
    ratingCount: 0,
    peachRating: 0,
    medals: [],
    disputes: {
      opened: 0,
      won: 0,
      lost: 0,
      resolved: 0,
    },

    pgpPublicKey: defaultUser.pgpPublicKey,
    pgpPublicKeyProof: defaultUser.pgpPublicKeyProof,
    pgpPublicKeys: defaultUser.pgpPublicKeys,
  },
  fundingAmountDifferent: false,
  publicKey: 'TODO add public key',
}

export const buyOffer: BuyOffer = {
  creationDate: new Date('2022-03-08T11:41:07.245Z'),
  publishingDate: new Date('2022-03-08T11:41:07.245Z'),
  lastModified: new Date('2022-03-08T11:41:07.245Z'),
  id: '37',
  online: true,
  type: 'bid',
  escrowType: 'bitcoin',
  meansOfPayment: {
    EUR: ['sepa'],
    CHF: ['twint'],
  },
  paymentData: {
    sepa: { hashes: validSEPADataHashes },
    twint: { hashes: twintDataHashes },
  },
  amount: [50000, 250000],
  matches: [],
  doubleMatched: false,
  releaseAddress: 'bcrt1q70z7vw93cxs6jx7nav9cmcn5qvlv362qfudnqmz9fnk2hjvz5nus4c0fuh',
  tradeStatus: 'searchingForPeer',
  maxPremium: null,
  minReputation: null,
  user: defaultUser,
  escrowFee: 0.0001,
  freeTrade: false,
  message: 'TODO add message',
}
