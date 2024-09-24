import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { acceptTradeRequestForSellOffer } from "./acceptTradeRequestForSellOffer";
import { acceptTradeRequestForBuyOffer } from "./acceptTradeRequestsForBuyOffer";
import { cancelOffer } from "./cancelOffer";
import { confirmEscrow } from "./confirmEscrow";
import { createEscrow } from "./createEscrow";
import { getBuyOfferSummary } from "./getBuyOfferSummary";
import { getBuyOfferSummaryIds } from "./getBuyOfferSummaryIds";
import { getEscrowInfo } from "./getEscrowInfo";
import { getFundingStatus } from "./getFundingStatus";
import { getMatch } from "./getMatch";
import { getMatches } from "./getMatches";
import { getOfferDetails } from "./getOfferDetails";
import { getOfferSummaries } from "./getOfferSummaries";
import { getOffers } from "./getOffers";
import { getRefundPSBT } from "./getRefundPSBT";
import { getSellOfferSummary } from "./getSellOfferSummary";
import { getSellOfferSummaryIds } from "./getSellOfferSummaryIds";
import { getTradeRequestsForBuyOffer } from "./getTradeRequestsForBuyOffer";
import { getTradeRequestsForSellOffer } from "./getTradeRequestsForSellOffer";
import { matchOffer } from "./matchOffer";
import { patchOffer } from "./patchOffer";
import { postBuyOffer } from "./postBuyOffer";
import { postSellOffer } from "./postSellOffer";
import { refundSellOffer } from "./refundSellOffer";
import { republishSellOffer } from "./republishSellOffer";
import { requestTradeWithBuyOffer } from "./requestTradeWithBuyOffer";
import { requestTradeWithSellOffer } from "./requestTradeWithSellOffer";
import { searchOfferSummaries } from "./searchOfferSummaries";
import { searchOffers } from "./searchOffers";
import { unmatchOffer } from "./unmatchOffer";

export const privateOfferAPI = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers
) => ({
  acceptTradeRequestForBuyOffer: acceptTradeRequestForBuyOffer(
    options,
    helpers
  ),
  acceptTradeRequestForSellOffer: acceptTradeRequestForSellOffer(
    options,
    helpers
  ),
  cancelOffer: cancelOffer(options, helpers),
  confirmEscrow: confirmEscrow(options, helpers),
  createEscrow: createEscrow(options, helpers),
  getEscrowInfo: getEscrowInfo(options, helpers),
  getFundingStatus: getFundingStatus(options, helpers),
  getMatch: getMatch(options, helpers),
  getMatches: getMatches(options, helpers),
  getOfferDetails: getOfferDetails(options, helpers),
  getOfferSummaries: getOfferSummaries(options, helpers),
  getOffers: getOffers(options, helpers),
  getRefundPSBT: getRefundPSBT(options, helpers),
  matchOffer: matchOffer(options, helpers),
  patchOffer: patchOffer(options, helpers),
  postBuyOffer: postBuyOffer(options, helpers),
  postSellOffer: postSellOffer(options, helpers),
  refundSellOffer: refundSellOffer(options, helpers),
  republishSellOffer: republishSellOffer(options, helpers),
  requestTradeWithBuyOffer: requestTradeWithBuyOffer(options, helpers),
  requestTradeWithSellOffer: requestTradeWithSellOffer(options, helpers),
  searchOffers: searchOffers(options, helpers),
  searchOfferSummaries: searchOfferSummaries(options, helpers),
  getSellOfferSummaryIds: getSellOfferSummaryIds(options, helpers),
  getSellOfferSummary: getSellOfferSummary(options, helpers),
  getBuyOfferSummaryIds: getBuyOfferSummaryIds(options, helpers),
  getBuyOfferSummary: getBuyOfferSummary(options, helpers),
  getTradeRequestsForBuyOffer: getTradeRequestsForBuyOffer(options, helpers),
  getTradeRequestsForSellOffer: getTradeRequestsForSellOffer(options, helpers),
  unmatchOffer: unmatchOffer(options, helpers),
});
