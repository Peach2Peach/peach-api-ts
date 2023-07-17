import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { getInfo } from './getInfo'
import { getStatus } from './getStatus'

export const publicSystemAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  getInfo: getInfo(options, helpers),
  getStatus: getStatus(options, helpers),
})
