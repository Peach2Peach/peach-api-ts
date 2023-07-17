import { PeachAPIOptions } from '../../types'
import { auth } from './auth'
import { deletePaymentHash } from './deletePaymentHash'
import { getSelfUser } from './getSelfUser'
import { getTradingLimit } from './getTradingLimit'
import { logoutUser } from './logoutUser'
import { redeemNoPeachFees } from './redeemNoPeachFees'
import { redeemReferralCode } from './redeemReferralCode'
import { register } from './register'
import { updateUser } from './updateUser'

export const privateUserAPI = (options: PeachAPIOptions) => ({
  auth: auth(options),
  deletePaymentHash: deletePaymentHash(options),
  getSelfUser: getSelfUser(options),
  getTradingLimit: getTradingLimit(options),
  logoutUser: logoutUser(options),
  redeemNoPeachFees: redeemNoPeachFees(options),
  redeemReferralCode: redeemReferralCode(options),
  register: register(options),
  updateUser: updateUser(options),
})
