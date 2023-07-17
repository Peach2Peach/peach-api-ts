import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { sendReport } from './sendReport'

export const publicContactAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  sendReport: sendReport(options, helpers),
})
