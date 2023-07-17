import { PeachAPIOptions } from '../../types'
import { getInfo } from './getInfo'
import { getStatus } from './getStatus'

export const publicSystemAPI = (options: PeachAPIOptions) => ({
  getInfo: getInfo(options),
  getStatus: getStatus(options),
})
