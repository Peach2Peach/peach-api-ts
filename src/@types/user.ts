export type Medal = 'fastTrader' | 'superTrader' | 'ambassador'

export type FeeRate = 'fastestFee' | 'halfHourFee' | 'hourFee' | 'economyFee' | 'minimumFee' | number

export type Disputes = {
  opened: number
  won: number
  lost: number
  resolved: number
}
export type User = {
  banned: boolean
  bonusPoints: number
  creationDate: Date
  disabled: boolean
  disputes: Disputes
  fcmToken?: string
  feeRate: FeeRate
  freeTrades?: number
  historyRating: number
  id: string
  isBatchingEnabled: boolean
  kyc: boolean
  lastModified: Date
  linkedIds: string[]
  maxFreeTrades?: number
  medals: Medal[]
  peachRating: number
  pgpPublicKey: string
  pgpPublicKeyProof: string
  rating: number
  ratingCount: number
  recentRating: number
  referralCode?: string
  referredTradingAmount: number
  trades: number
  uniqueId: string
  usedReferralCode?: string
  userRating: number
}

export type NewUser = User & {
  newUser: true
}

export type PublicUser = Omit<
  User,
  | 'disabled'
  | 'banned'
  | 'linkedIds'
  | 'lastModified'
  | 'kyc'
  | 'uniqueId'
  | 'referredTradingAmount'
  | 'bonusPoints'
  | 'feeRate'
  | 'freeTrades'
  | 'maxFreeTrades'
  | 'isBatchingEnabled'
>

export type Rating = {
  creationDate: Date
  rating: -1 | 1
  ratedBy: string
  signature: string
}

export type TradingLimit = {
  daily: number
  dailyAmount: number
  yearly: number
  yearlyAmount: number
  monthlyAnonymous: number
  monthlyAnonymousAmount: number
}
