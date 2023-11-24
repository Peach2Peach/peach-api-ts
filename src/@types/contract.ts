import { DisputeOutcome, DisputeReason } from './dispute'
import { Country, Currency } from './global'
import { GetBatchStatusResponseBody } from './groupHugAPI/batch'
import { TradeStatus } from './offer'
import { PaymentData, PaymentMethod } from './payment'
import { PublicUser } from './user'

export type PaymentReminder = 'sixHours' | 'oneHour' | 'final'

export type TradeParticipant = 'seller' | 'buyer'

export type Contract = {
  creationDate: Date
  lastModified: Date
  id: string
  seller: PublicUser
  buyer: PublicUser

  symmetricKeyEncrypted: string
  symmetricKeySignature: string

  amount: number
  currency: Currency
  price: number
  priceCHF: number
  premium: number
  paymentMethod: PaymentMethod
  paymentDataEncrypted: string
  paymentDataSignature: string
  paymentData?: PaymentData
  buyerPaymentDataEncrypted: string
  buyerPaymentDataSignature: string
  buyerPaymentData?: PaymentData
  hashedPaymentData: string[]
  buyerHashedPaymentData: string[]
  country?: Country

  paymentMade: Date | null
  paymentConfirmed: Date | null
  paymentExpectedBy: Date
  lastReminderSent?: PaymentReminder

  escrow: string
  releaseAddress: string
  releaseTransaction?: string
  releaseTxId?: string

  releasePsbt: string
  batchId?: string

  disputeActive: boolean
  disputeDate: Date | null
  disputeReason?: DisputeReason
  disputeClaim?: string
  disputeInitiator?: string
  disputeAcknowledgedByCounterParty?: boolean
  disputeOutcome?: DisputeOutcome
  disputeOutcomeAcknowledgedBy: TradeParticipant[]
  disputeWinner?: TradeParticipant
  disputeResolvedDate: Date | null

  disputeTicketId?: string
  disputeTicketIdCounterParty?: string

  cancelationRequested?: boolean
  canceled: boolean
  canceledBy?: TradeParticipant | 'mediator'

  ratingBuyer: 1 | 0 | -1
  ratingSeller: 1 | 0 | -1
  messages: number

  buyerFee: number
  sellerFee: number

  tradeStatus: TradeStatus
  batchReleasePsbt?: string
  batchInfo?: GetBatchStatusResponseBody
  isEmailRequired: boolean
  unreadMessages: number
  isChatActive: boolean
}
