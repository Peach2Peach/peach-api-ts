import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { getOffersStats } from './getOffersStats'
import { marketPrice } from './marketPrice'
import { marketPrices } from './marketPrices'

export const publicMarketAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  marketPrice: marketPrice(options, helpers),
  marketPrices: marketPrices(options, helpers),
  getOffersStats: getOffersStats(options, helpers),
})
