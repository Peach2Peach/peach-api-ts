import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { cancelOffer } from "./cancelOffer";
import { confirmEscrow } from "./confirmEscrow";
import { createEscrow } from "./createEscrow";
import { getFundingStatus } from "./getFundingStatus";
import { getMatch } from "./getMatch";
import { getMatches } from "./getMatches";
import { getOfferDetails } from "./getOfferDetails";
import { getOfferSummaries } from "./getOfferSummaries";
import { getSummariesForWallet } from "./getOfferSummariesForWallet";
import { getOffers } from "./getOffers";
import { getRefundPSBT } from "./getRefundPSBT";
import { matchOffer } from "./matchOffer";
import { patchOffer } from "./patchOffer";
import { postBuyOffer } from "./postBuyOffer";
import { postSellOffer } from "./postSellOffer";
import { refundSellOffer } from "./refundSellOffer";
import { republishSellOffer } from "./republishSellOffer";
import { searchOfferSummaries } from "./searchOfferSummaries";
import { searchOffers } from "./searchOffers";
import { setEscrowAsFundedByPeachWallet } from "./setEscrowAsFundedByPeachWallet";
import { unmatchOffer } from "./unmatchOffer";

export const privateOfferAPI = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  cancelOffer: cancelOffer(options, helpers),
  confirmEscrow: confirmEscrow(options, helpers),
  createEscrow: createEscrow(options, helpers),
  getFundingStatus: getFundingStatus(options, helpers),
  getMatch: getMatch(options, helpers),
  getMatches: getMatches(options, helpers),
  getOfferDetails: getOfferDetails(options, helpers),
  getOfferSummaries: getOfferSummaries(options, helpers),
  getSummariesForWallet:getSummariesForWallet(options, helpers),
  getOffers: getOffers(options, helpers),
  getRefundPSBT: getRefundPSBT(options, helpers),
  matchOffer: matchOffer(options, helpers),
  patchOffer: patchOffer(options, helpers),
  postBuyOffer: postBuyOffer(options, helpers),
  postSellOffer: postSellOffer(options, helpers),
  refundSellOffer: refundSellOffer(options, helpers),
  republishSellOffer: republishSellOffer(options, helpers),
  searchOffers: searchOffers(options, helpers),
  searchOfferSummaries: searchOfferSummaries(options, helpers),
  unmatchOffer: unmatchOffer(options, helpers),
  setEscrowAsFundedByPeachWallet: setEscrowAsFundedByPeachWallet(options, helpers),
});
