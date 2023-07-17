import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { acknowledgeDispute } from './acknowledgeDispute'
import { cancelContract } from './cancelContract'
import { confirmContractCancelation } from './confirmContractCancelation'
import { confirmPayment } from './confirmPayment'
import { extendPaymentTimer } from './extendPaymentTimer'
import { getChat } from './getChat'
import { getContract } from './getContract'
import { getContractSummaries } from './getContractSummaries'
import { getContracts } from './getContracts'
import { postChat } from './postChat'
import { raiseDispute } from './raiseDispute'
import { rateUser } from './rateUser'
import { rejectContractCancelation } from './rejectContractCancelation'

export const privateContractAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  acknowledgeDispute: acknowledgeDispute(options, helpers),
  cancelContract: cancelContract(options, helpers),
  confirmContractCancelation: confirmContractCancelation(options, helpers),
  confirmPayment: confirmPayment(options, helpers),
  extendPaymentTimer: extendPaymentTimer(options, helpers),
  getChat: getChat(options, helpers),
  getContract: getContract(options, helpers),
  getContractSummaries: getContractSummaries(options, helpers),
  getContracts: getContracts(options, helpers),
  postChat: postChat(options, helpers),
  raiseDispute: raiseDispute(options, helpers),
  rateUser: rateUser(options, helpers),
  rejectContractCancelation: rejectContractCancelation(options, helpers),
})
