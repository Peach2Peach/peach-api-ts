import { User } from '../@types/user'

export const defaultUser: User = {
  bonusPoints: 0,
  creationDate: new Date('2023-03-01T13:39:55.942Z'),
  disputes: { opened: 0, won: 0, lost: 0, resolved: 0 },
  feeRate: 'hourFee',
  freeTrades: 0,
  historyRating: 1,
  id: '0213583209ada26c16e5c3157d86809f8fd46e602936a4e3d51cd988a42ebe19f3',
  isBatchingEnabled: false,
  maxFreeTrades: 0,
  medals: ['fastTrader', 'ambassador'],
  peachRating: 1,
  pgpPublicKey: 'pgpPublicKey',
  pgpPublicKeyProof:
    // eslint-disable-next-line max-len
    '3b55cc1bf439d41c2ed79ed5692184a325a4da6c5d314320733ddbc7848b9b2c5943d8281b06e85d0d738bd48aa1646edf9364c423b337f57e64a9025acf36ae',
  rating: 1,
  ratingCount: 13,
  recentRating: 1,
  referralCode: 'PR0063',
  referredTradingAmount: 0,
  trades: 11,
  usedReferralCode: 'SATOSHI',
  userRating: 1,
  linkedIds: [],
  lastModified: new Date('2023-03-01T13:39:55.942Z'),
  disabled: false,
  banned: false,
  uniqueId: 'uniqueId',
  kyc: false,
}
