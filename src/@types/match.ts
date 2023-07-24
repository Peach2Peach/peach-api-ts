import { Currency, Pricebook } from './global'
import { OfferPaymentData } from './offer'
import { MeansOfPayment } from './payment'
import { PublicUser, TradingLimit, User } from './user'

export type MatchUnavailableReasons = {
  exceedsLimit: (keyof TradingLimit)[]
}

export type Match = {
  creationDate: Date
  lastModified: Date
  user: User
  offerId: string
  amount: number
  escrow?: string
  prices: Pricebook
  matchedPrice: number | null
  premium: number | null
  meansOfPayment: MeansOfPayment
  paymentData?: OfferPaymentData
  selectedCurrency?: Currency
  selectedPaymentMethod?: PaymentMethodChangeEvent
  symmetricKeyEncrypted: string
  symmetricKeySignature: string
  matched: boolean
  unavailable: MatchUnavailableReasons
}
export type PublicMatch = Omit<Match, 'user'> & { user: PublicUser }

export type DeserializedMatch = Omit<Match, 'user' | 'matched' | 'premium' | 'unavailable' | 'amount' | 'escrow'> & {
  user: string
}

export type SortBy = 'bestReputation' | 'highestAmount' | 'highestPrice' | 'lowestPremium'
export type Matching = Omit<Match, 'premium' | 'amount' | 'escrow'>
