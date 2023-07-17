import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { getFeeEstimate } from './getFeeEstimate'
import { postTx } from './postTx'

export const publicBitcoinAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  getFeeEstimate: getFeeEstimate(options, helpers),
  postTx: postTx(options, helpers),
})
