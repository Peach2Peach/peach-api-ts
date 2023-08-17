import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { auth } from './auth'
import { deletePaymentHash } from './deletePaymentHash'
import { enableTransactionBatching } from './enableBatching'
import { getSelfUser } from './getSelfUser'
import { getTradingLimit } from './getTradingLimit'
import { logoutUser } from './logoutUser'
import { redeemNoPeachFees } from './redeemNoPeachFees'
import { redeemReferralCode } from './redeemReferralCode'
import { register } from './register'
import { updateUser } from './updateUser'

export const privateUserAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  auth: auth(options, helpers),
  deletePaymentHash: deletePaymentHash(options, helpers),
  enableTransactionBatching: enableTransactionBatching(options, helpers),
  getSelfUser: getSelfUser(options, helpers),
  getTradingLimit: getTradingLimit(options, helpers),
  logoutUser: logoutUser(options, helpers),
  redeemNoPeachFees: redeemNoPeachFees(options, helpers),
  redeemReferralCode: redeemReferralCode(options, helpers),
  register: register(options, helpers),
  updateUser: updateUser(options, helpers),
})
