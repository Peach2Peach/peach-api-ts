import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { getInfo } from './getInfo'
import { getNews } from './getNews'
import { getPaymentMethodInfo } from './getPaymentMethodInfo'
import { getPaymentMethodsInfo } from './getPaymentMethodsInfo'
import { getStatus } from './getStatus'

export const publicSystemAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  getInfo: getInfo(options, helpers),
  getPaymentMethodInfo: getPaymentMethodInfo(options, helpers),
  getPaymentMethodsInfo: getPaymentMethodsInfo(options, helpers),
  getStatus: getStatus(options, helpers),
  getNews: getNews(options, helpers),
})
