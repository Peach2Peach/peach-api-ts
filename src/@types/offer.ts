import { Pricebook } from './global'
import { MeansOfPayment, PaymentMethod } from './payment'
import { PublicUser } from './user'

export type FundingStatus = {
  status: 'NULL' | 'MEMPOOL' | 'FUNDED' | 'WRONG_FUNDING_AMOUNT' | 'CANCELED'
  confirmations?: number
  txIds: string[]
  vouts: number[]
  amounts: number[]
  expiry: number
  derivationPath?: string
}

export type TradeStatus =
  | 'fundEscrow'
  | 'searchingForPeer'
  | 'escrowWaitingForConfirmation'
  | 'fundingAmountDifferent'
  | 'messageSigningRequired'
  | 'hasMatchesAvailable'
  | 'offerCanceled'
  | 'refundAddressRequired'
  | 'refundTxSignatureRequired'
  | 'paymentRequired'
  | 'paymentTooLate'
  | 'confirmPaymentRequired'
  | 'dispute'
  | 'releaseEscrow'
  | 'rateUser'
  | 'confirmCancelation'
  | 'tradeCompleted'
  | 'tradeCanceled'
  | 'refundOrReviveRequired'
  | 'offerHidden'
  | 'offerHiddenWithMatchesAvailable'

type PaymentMethodCountry =
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

export type OfferPaymentData = Partial<
  Record<PaymentMethod, { hashes: string[]; hash?: string; country?: PaymentMethodCountry }>
>

export type Offer = {
  type: 'ask' | 'bid'
  meansOfPayment: MeansOfPayment
  paymentData: OfferPaymentData

  id: string
  creationDate: Date
  lastModified: Date
  publishingDate?: Date
  online: boolean

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
  amount?: number
  premium: number
  returnAddress: string
  funding?: FundingStatus
  multi?: number

  escrow?: string
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
  maxPremium: number | null
}
