import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { acknowledgeDispute } from './acknowledgeDispute'
import { acknowledgeDisputeOutcome } from './acknowledgeDisputeOutcome'
import { cancelContract } from './cancelContract'
import { confirmContractCancelation } from './confirmContractCancelation'
import { confirmPaymentBuyer } from './confirmPaymentBuyer'
import { confirmPaymentSeller } from './confirmPaymentSeller'
import { extendPaymentTimer } from './extendPaymentTimer'
import { getChat } from './getChat'
import { getContract } from './getContract'
import { getContractSummaries } from './getContractSummaries'
import { getContracts } from './getContracts'
import { postChat } from './postChat'
import { raiseDispute } from './raiseDispute'
import { rateUser } from './rateUser'
import { rejectContractCancelation } from './rejectContractCancelation'
import { setMessageRead } from './setMessageRead'

export const privateContractAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  acknowledgeDispute: acknowledgeDispute(options, helpers),
  acknowledgeDisputeOutcome: acknowledgeDisputeOutcome(options, helpers),
  cancelContract: cancelContract(options, helpers),
  confirmContractCancelation: confirmContractCancelation(options, helpers),
  confirmPaymentBuyer: confirmPaymentBuyer(options, helpers),
  confirmPaymentSeller: confirmPaymentSeller(options, helpers),
  extendPaymentTimer: extendPaymentTimer(options, helpers),
  getChat: getChat(options, helpers),
  getContract: getContract(options, helpers),
  getContracts: getContracts(options, helpers),
  getContractSummaries: getContractSummaries(options, helpers),
  postChat: postChat(options, helpers),
  raiseDispute: raiseDispute(options, helpers),
  rateUser: rateUser(options, helpers),
  rejectContractCancelation: rejectContractCancelation(options, helpers),
  setMessageRead: setMessageRead(options, helpers),
})

