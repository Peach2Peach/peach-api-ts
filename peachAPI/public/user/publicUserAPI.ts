import { PeachAPIOptions } from '../../types'
import { checkReferralCode } from './checkReferralCode'
import { getUser } from './getUser'

export const publicUserAPI = (options: PeachAPIOptions) => ({
  checkReferralCode: checkReferralCode(options),
  getUser: getUser(options),
})
