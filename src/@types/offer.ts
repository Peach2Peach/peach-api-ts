import { MatchFilter } from './api/offerAPI'
import { Pricebook } from './global'
import { MeansOfPayment, PaymentMethod } from './payment'
import { Medal, PublicUser } from './user'

export type FundingStatus = {
  status: 'NULL' | 'MEMPOOL' | 'FUNDED' | 'WRONG_FUNDING_AMOUNT' | 'CANCELED'
  confirmations: number
  txIds: string[]
  vouts: number[]
  amounts: number[]
  expiry: number
  derivationPath: string
}

export type TradeStatus =
  | 'confirmCancelation'
  | 'confirmPaymentRequired'
  | 'dispute'
  | 'escrowWaitingForConfirmation'
  | 'fundEscrow'
  | 'fundingAmountDifferent'
  | 'hasMatchesAvailable'
  | 'offerCanceled'
  | 'offerHidden'
  | 'offerHiddenWithMatchesAvailable'
  | 'paymentRequired'
  | 'paymentTooLate'
  | 'payoutPending'
  | 'rateUser'
  | 'refundAddressRequired'
  | 'refundOrReviveRequired'
  | 'refundTxSignatureRequired'
  | 'releaseEscrow'
  | 'searchingForPeer'
  | 'tradeCanceled'
  | 'tradeCompleted'

export type PaymentMethodCountry =
  | 'BG'
  | 'CZ'
  | 'DK'
  | 'HU'
  | 'NO'
  | 'PL'
  | 'RO'
  | 'TR'
  | 'NG'
  | 'DE'
  | 'CH'
  | 'ISK'
  | 'SE'
  | 'IT'
  | 'ES'
  | 'FR'
  | 'NL'
  | 'UK'
  | 'BE'
  | 'PT'
  | 'GR'
  | 'UK'
  | 'GB'
  | 'CY'
  | 'SI'
  | 'LV'
  | 'US'
  | 'FI'

export type OfferPaymentData = Partial<
  Record<
    PaymentMethod,
    { hashes: string[]; hash?: string; country?: PaymentMethodCountry; encrypted?: string; signature?: string }
  >
>

export type EscrowType = 'bitcoin' | 'liquid'

export type Offer = {
  type: 'ask' | 'bid'
  meansOfPayment: MeansOfPayment
  paymentData: OfferPaymentData

  id: string
  creationDate: Date
  lastModified: Date
  publishingDate?: Date
  online: boolean
  escrowType: EscrowType

  user: PublicUser
  matches: string[]
  doubleMatched: boolean
  contractId?: string
  escrowFee: number
  freeTrade: boolean

  tradeStatus: TradeStatus
}

export type SellOffer = Offer & {
  type: 'ask'
  amount: number
  premium: number
  returnAddress: string
  funding: FundingStatus
  fundingLiquid: FundingStatus
  multi?: number

  /** @deprecated */
  escrow?: string

  escrows: {
    bitcoin?: string,
    liquid?: string,
    lightning?: string,
  }
  escrowNotifiedUser?: boolean
  tx?: string
  refundTx?: string
  releaseTx?: string
  txId?: string
  refunded: boolean
  released: boolean
  fundingAmountDifferent: boolean
  publicKey: string

  oldOfferId?: string
  newOfferId?: string
  prices?: Pricebook
}

export type BuyOffer = Offer & {
  type: 'bid'
  releaseAddress: string
  amount: [number, number]
  message: string
  messageSignature?: string
} & Required<MatchFilter>

export type OfferSummary = {
  id: string
  type: 'bid' | 'ask'
  escrowType: EscrowType,
  creationDate: Date
  lastModified: Date
  amount: number | [number, number]
  matches: string[]
  prices?: Pricebook
  tradeStatus: TradeStatus
  contractId?: string
  newTradeId?: string
  txId?: string
  fundingTxId?: string
  refunded?: boolean
}

type BuySorter = 'highestAmount' | 'lowestPremium' | 'bestReputation'
type SellSorter = 'highestPrice' | 'bestReputation'

export type Sorter = BuySorter | SellSorter

export type InstantTradeCriteria = {
  minReputation: number
  minTrades: number
  badges: Medal[]
}
