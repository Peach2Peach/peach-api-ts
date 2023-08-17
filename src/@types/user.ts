export type Medal = 'fastTrader' | 'superTrader' | 'ambassador'

export type FeeRate = 'fastestFee' | 'halfHourFee' | 'hourFee' | 'economyFee' | 'minimumFee' | number

export type Disputes = {
  opened: number
  won: number
  lost: number
}
export type User = {
  id: string
  linkedIds: string[]
  disabled: boolean
  banned: boolean
  creationDate: Date
  lastModified: Date
  trades: number
  kyc: boolean
  rating: number
  peachRating: number
  userRating: number

  /**
   * average of historical scores user received
   */
  historyRating: number

  /**
   * average of most recent scores user received
   */
  recentRating: number
  ratingCount: number
  medals: Medal[]
  pgpPublicKey?: string
  pgpPublicKeyProof?: string
  fcmToken?: string
  uniqueId: string
  referralCode?: string
  usedReferralCode?: string
  referredTradingAmount: number
  bonusPoints: number
  disputes: Disputes
  feeRate: FeeRate
  freeTrades?: number
  maxFreeTrades?: number
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
