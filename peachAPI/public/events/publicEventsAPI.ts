import { PeachAPIOptions } from '../../types'
import { getEvents } from './getEvents'

export const publicEventsAPI = (options: PeachAPIOptions) => ({
  getEvents: getEvents(options),
})
