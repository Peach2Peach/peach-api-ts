import { PeachAPIOptions } from '../../types'
import { marketPrice } from './marketPrice'
import { marketPrices } from './marketPrices'

export const publicMarketAPI = (options: PeachAPIOptions) => ({
  marketPrice: marketPrice(options),
  marketPrices: marketPrices(options),
})
