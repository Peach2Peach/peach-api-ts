import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { getInfo } from './getInfo'
import { getPaymentMethodInfo } from './getPaymentMethodInfo'
import { getStatus } from './getStatus'

export const publicSystemAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  getInfo: getInfo(options, helpers),
  getPaymentMethodInfo: getPaymentMethodInfo(options, helpers),
  getStatus: getStatus(options, helpers),
})
