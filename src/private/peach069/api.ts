import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { acceptBuyOfferTradeRequestReceivedByIds } from "./acceptBuyOfferTradeRequestReceivedByIds";
import { createBuyOffer } from "./createBuyOffer";
import { getBuyOfferById } from "./getBuyOfferById";
import { getBuyOffers } from "./getBuyOffers";
import { getBuyOfferTradeRequestPerformedById } from "./getBuyOfferTradeRequestPerformedById";
import { getBuyOfferTradeRequestsReceivedById } from "./getBuyOfferTradeRequestsReceivedById";
import { performBuyOfferTradeRequest } from "./performBuyOfferTradeRequest";
import { rejectBuyOfferTradeRequestReceivedByIds } from "./rejectBuyOfferTradeRequestReceivedByIds";

export const peach069API = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  createBuyOffer: createBuyOffer(options, helpers),
  getBuyOffers: getBuyOffers(options, helpers),
  getBuyOfferById: getBuyOfferById(options, helpers),
  getBuyOfferTradeRequestPerformedById : getBuyOfferTradeRequestPerformedById(options, helpers),
  performBuyOfferTradeRequest:performBuyOfferTradeRequest(options, helpers),
  getBuyOfferTradeRequestsReceivedById:getBuyOfferTradeRequestsReceivedById(options, helpers),
  rejectBuyOfferTradeRequestReceivedByIds:rejectBuyOfferTradeRequestReceivedByIds(options, helpers),
  acceptBuyOfferTradeRequestReceivedByIds:acceptBuyOfferTradeRequestReceivedByIds(options, helpers),

});


