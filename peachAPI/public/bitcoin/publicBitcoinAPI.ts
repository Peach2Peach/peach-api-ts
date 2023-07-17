import { PeachAPIOptions } from '../../types'
import { getFeeEstimate } from './getFeeEstimate'
import { postTx } from './postTx'

export const publicBitcoinAPI = (options: PeachAPIOptions) => ({
  getFeeEstimate: getFeeEstimate(options),
  postTx: postTx(options),
})
