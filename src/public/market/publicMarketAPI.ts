import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { marketPrice } from './marketPrice'
import { marketPrices } from './marketPrices'

export const publicMarketAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  marketPrice: marketPrice(options, helpers),
  marketPrices: marketPrices(options, helpers),
})
