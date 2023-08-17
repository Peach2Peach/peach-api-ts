import { TradeParticipant } from './contract'

export type DisputeReason = `noPayment.${TradeParticipant}` | `unresponsive.${TradeParticipant}` | 'abusive' | 'other'

export type DisputeOutcome = 'buyerWins' | 'sellerWins' | 'none' | 'cancelTrade' | 'payOutBuyer'
