import { PeachAPIOptions } from '../../types'
import { cancelOffer } from './cancelOffer'
import { confirmEscrow } from './confirmEscrow'
import { createEscrow } from './createEscrow'
import { getFundingStatus } from './getFundingStatus'
import { getMatches } from './getMatches'
import { getOfferDetails } from './getOfferDetails'
import { getOfferSummaries } from './getOfferSummaries'
import { getOffers } from './getOffers'
import { getRefundPSBT } from './getRefundPSBT'
import { matchOffer } from './matchOffer'
import { patchOffer } from './patchOffer'
import { postBuyOffer } from './postBuyOffer'
import { postSellOffer } from './postSellOffer'
import { refundSellOffer } from './refundSellOffer'
import { republishSellOffer } from './republishSellOffer'
import { unmatchOffer } from './unmatchOffer'

export const privateOfferAPI = (options: PeachAPIOptions) => ({
  cancelOffer: cancelOffer(options),
  confirmEscrow: confirmEscrow(options),
  createEscrow: createEscrow(options),
  getFundingStatus: getFundingStatus(options),
  getMatches: getMatches(options),
  getOfferDetails: getOfferDetails(options),
  getOfferSummaries: getOfferSummaries(options),
  getOffers: getOffers(options),
  getRefundPSBT: getRefundPSBT(options),
  matchOffer: matchOffer(options),
  patchOffer: patchOffer(options),
  postBuyOffer: postBuyOffer(options),
  postSellOffer: postSellOffer(options),
  refundSellOffer: refundSellOffer(options),
  republishSellOffer: republishSellOffer(options),
  unmatchOffer: unmatchOffer(options),
})
