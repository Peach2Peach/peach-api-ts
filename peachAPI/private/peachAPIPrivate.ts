import { PeachAPIOptions } from '../types'
import { privateContractAPI } from './contract/privateContractAPI'
import { privateOfferAPI } from './offer/privateOfferAPI'
import { privateUserAPI } from './user/privateUserAPI'

export const peachAPIPrivate = (options: PeachAPIOptions) => ({
  contract: privateContractAPI(options),
  offer: privateOfferAPI(options),
  user: privateUserAPI(options),
})
