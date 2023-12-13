import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { getOffersStats } from './getOffersStats'
import { getPastOffersStats } from './getPastOffersStats'
import { marketPrice } from './marketPrice'
import { marketPrices } from './marketPrices'

export const publicMarketAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  marketPrice: marketPrice(options, helpers),
  marketPrices: marketPrices(options, helpers),
  getOffersStats: getOffersStats(options, helpers),
  getPastOffersStats: getPastOffersStats(options, helpers),
})
