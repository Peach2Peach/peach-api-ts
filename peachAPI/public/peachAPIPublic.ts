import { PeachAPIOptions } from '../types'
import { publicBitcoinAPI } from './bitcoin/publicBitcoinAPI'
import { publicContactAPI } from './contact/publicContactAPI'
import { publicMarketAPI } from './market/publicMarketAPI'
import { publicEventsAPI } from './events/publicEventsAPI'
import { publicSystemAPI } from './system/publicSystemAPI'
import { publicUserAPI } from './user/publicUserAPI'

export const peachAPIPublic = (options: PeachAPIOptions) => ({
  bitcoin: publicBitcoinAPI(options),
  contact: publicContactAPI(options),
  market: publicMarketAPI(options),
  events: publicEventsAPI(options),
  system: publicSystemAPI(options),
  user: publicUserAPI(options),
})
