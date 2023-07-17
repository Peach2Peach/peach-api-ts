import { PeachAPIHelpers, PeachAPIOptions } from '../../types'
import { getEvents } from './getEvents'

export const publicEventsAPI = (options: PeachAPIOptions, helpers: PeachAPIHelpers) => ({
  getEvents: getEvents(options, helpers),
})
