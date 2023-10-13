import { Country, Pricebook } from './global'
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

export type OfferPaymentData = Partial<Record<PaymentMethod, { hashes: string[]; hash?: string; country?: Country }>>

export type Offer = {
  id: string
  creationDate: Date
  lastModified: Date
  publishingDate?: Date
  online: boolean

  user: PublicUser
  meansOfPayment: MeansOfPayment
  paymentData: OfferPaymentData
  matches: string[]
  doubleMatched: boolean
  contractId?: string
  escrowFee: number
  freeTrade: boolean
}

export type SellOffer = Offer & {
  type: 'ask'
  premium: number
  returnAddress: string
  amount?: number
  fundingAmountDifferent: boolean
  publicKey: string
  escrow?: string
  escrowNotifiedUser?: boolean
  prices?: Pricebook
  funding?: FundingStatus
  tx?: string
  refundTx?: string
  releaseTx?: string
  txId?: string
  refunded: boolean
  released: boolean
  newOfferId?: string
  oldOfferId?: string
}

export type BuyOffer = Offer & {
  type: 'bid'
  releaseAddress: string
  amount: [number, number]
  message: string
  messageSignature?: string
}
