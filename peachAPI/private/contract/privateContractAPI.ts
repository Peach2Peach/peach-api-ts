import { PeachAPIOptions } from '../../types'
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

export const privateContractAPI = (options: PeachAPIOptions) => ({
  acknowledgeDispute: acknowledgeDispute(options),
  cancelContract: cancelContract(options),
  confirmContractCancelation: confirmContractCancelation(options),
  confirmPayment: confirmPayment(options),
  extendPaymentTimer: extendPaymentTimer(options),
  getChat: getChat(options),
  getContract: getContract(options),
  getContractSummaries: getContractSummaries(options),
  getContracts: getContracts(options),
  postChat: postChat(options),
  raiseDispute: raiseDispute(options),
  rateUser: rateUser(options),
  rejectContractCancelation: rejectContractCancelation(options),
})
