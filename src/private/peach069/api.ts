import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { acceptBuyOfferTradeRequestReceivedByIds } from "./acceptBuyOfferTradeRequestReceivedByIds";
import { acceptSellOfferTradeRequestReceivedByIds } from "./acceptSellOfferTradeRequestReceivedByIds";
import { createBuyOffer } from "./createBuyOffer";
import { getBuyOfferById } from "./getBuyOfferById";
import { getBuyOffers } from "./getBuyOffers";
import { getBuyOfferTradeRequestPerformedById } from "./getBuyOfferTradeRequestPerformedById";
import { getBuyOfferTradeRequestsReceivedById } from "./getBuyOfferTradeRequestsReceivedById";
import { getSellOfferById } from "./getSellOfferById";
import { getSellOffers } from "./getSellOffers";
import { getSellOfferTradeRequestPerformedById } from "./getSellOfferTradeRequestPerformedById";
import { getSellOfferTradeRequestsReceivedById } from "./getSellOfferTradeRequestsReceivedById";
import { performBuyOfferTradeRequest } from "./performBuyOfferTradeRequest";
import { performSellOfferTradeRequest } from "./performSellOfferTradeRequest";
import { rejectBuyOfferTradeRequestReceivedByIds } from "./rejectBuyOfferTradeRequestReceivedByIds";
import { rejectSellOfferTradeRequestReceivedByIds } from "./rejectSellOfferTradeRequestByIds";
import { removePerformedBuyOfferTradeRequest } from "./removePerformedBuyOfferTradeRequest";
import { removePerformedSellOfferTradeRequest } from "./removePerformedSellOfferTradeRequest";

export const peach069API = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  createBuyOffer: createBuyOffer(options, helpers),
  getBuyOffers: getBuyOffers(options, helpers),
  getBuyOfferById: getBuyOfferById(options, helpers),
  getBuyOfferTradeRequestPerformedById : getBuyOfferTradeRequestPerformedById(options, helpers),
  performBuyOfferTradeRequest:performBuyOfferTradeRequest(options, helpers),
  removePerformedBuyOfferTradeRequest:removePerformedBuyOfferTradeRequest(options, helpers),
  getBuyOfferTradeRequestsReceivedById:getBuyOfferTradeRequestsReceivedById(options, helpers),
  rejectBuyOfferTradeRequestReceivedByIds:rejectBuyOfferTradeRequestReceivedByIds(options, helpers),
  acceptBuyOfferTradeRequestReceivedByIds:acceptBuyOfferTradeRequestReceivedByIds(options, helpers),

  getSellOffers: getSellOffers(options, helpers),
  getSellOfferById: getSellOfferById(options, helpers),

  getSellOfferTradeRequestPerformedById : getSellOfferTradeRequestPerformedById(options, helpers),
  removePerformedSellOfferTradeRequest:removePerformedSellOfferTradeRequest(options, helpers),

  getSellOfferTradeRequestsReceivedById:getSellOfferTradeRequestsReceivedById(options, helpers),
  rejectSellOfferTradeRequestReceivedByIds:rejectSellOfferTradeRequestReceivedByIds(options, helpers),
  acceptSellOfferTradeRequestReceivedByIds:acceptSellOfferTradeRequestReceivedByIds(options, helpers),
  performSellOfferTradeRequest:performSellOfferTradeRequest(options, helpers),
});


