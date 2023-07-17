import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { checkReferralCode } from './checkReferralCode'
import { getUser } from './getUser'

export const publicUserAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  checkReferralCode: checkReferralCode(options, helpers),
  getUser: getUser(options, helpers),
})
