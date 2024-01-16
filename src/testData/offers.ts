import { BuyOffer, SellOffer } from '../@types/offer'
import { twintDataHashes, validSEPADataHashes } from './paymentData'
import { defaultUser } from './userData'

export const sellOffer: SellOffer = {
  creationDate: new Date('2022-03-08T11:41:07.245Z'),
  publishingDate: new Date('2022-03-08T11:41:07.245Z'),
  lastModified: new Date('2022-03-08T11:41:07.245Z'),
  id: '38',
  online: true,
  type: 'ask',
  meansOfPayment: {
    EUR: ['sepa'],
  },
  paymentData: {
    sepa: { hashes: validSEPADataHashes },
  },
  funding: {
    status: 'NULL',
    txIds: [],
    vouts: [],
    amounts: [],
    expiry: 537,
  },
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
