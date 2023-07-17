import { PeachAPIOptions } from '../../types'
import { sendReport } from './sendReport'

export const publicContactAPI = (options: PeachAPIOptions) => ({
  sendReport: sendReport(options),
})
