import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { acceptBuyOfferTradeRequestReceivedByIds } from "./acceptBuyOfferTradeRequestReceivedByIds";
import { acceptSellOfferTradeRequestReceivedByIds } from "./acceptSellOfferTradeRequestReceivedByIds";
import { canPerformInstantTradeWithSellOfferById } from "./canPerformInstantTradeWithSellOfferById";
import { createBuyOffer } from "./createBuyOffer";
import { getBuyOfferById } from "./getBuyOfferById";
import { getBuyOffers } from "./getBuyOffers";
import { getBuyOfferTradeRequestPerformedById } from "./getBuyOfferTradeRequestPerformedById";
import { getBuyOfferTradeRequestReceivedByIds } from "./getBuyOfferTradeRequestReceivedByIds";
import { getBuyOfferTradeRequestsReceivedById } from "./getBuyOfferTradeRequestsReceivedById";
import { getChatMessagesOfPerformedBuyOfferTradeRequest } from "./getChatMessagesOfPerformedBuyOfferTradeRequest";
import { getChatMessagesOfPerformedSellOfferTradeRequest } from "./getChatMessagesOfPerformedSellOfferTradeRequest";
import { getChatMessagesOfReceivedBuyOfferTradeRequest } from "./getChatMessagesOfReceivedBuyOfferTradeRequest";
import { getChatMessagesOfReceivedSellOfferTradeRequest } from "./getChatMessagesOfReceivedSellOfferTradeRequest";
import { getSellOfferById } from "./getSellOfferById";
import { getSellOffers } from "./getSellOffers";
import { getSellOfferTradeRequestPerformedById } from "./getSellOfferTradeRequestPerformedById";
import { getSellOfferTradeRequestReceivedByIds } from "./getSellOfferTradeRequestReceivedByIds";
import { getSellOfferTradeRequestsReceivedById } from "./getSellOfferTradeRequestsReceivedById";
import { performBuyOfferTradeRequest } from "./performBuyOfferTradeRequest";
import { performInstantTradeWithSellOfferById } from "./performInstantTradeWithSellOfferById";
import { performSellOfferTradeRequest } from "./performSellOfferTradeRequest";
import { rejectBuyOfferTradeRequestReceivedByIds } from "./rejectBuyOfferTradeRequestReceivedByIds";
import { rejectSellOfferTradeRequestReceivedByIds } from "./rejectSellOfferTradeRequestByIds";
import { removePerformedBuyOfferTradeRequest } from "./removePerformedBuyOfferTradeRequest";
import { removePerformedSellOfferTradeRequest } from "./removePerformedSellOfferTradeRequest";
import { sendChatMessagesOfPerformedBuyOfferTradeRequest } from "./sendChatMessagesOfPerformedBuyOfferTradeRequest";
import { sendChatMessagesOfPerformedSellOfferTradeRequest } from "./sendChatMessagesOfPerformedSellOfferTradeRequest";
import { sendChatMessagesOfReceivedBuyOfferTradeRequest } from "./sendChatMessagesOfReceivedBuyOfferTradeRequest";
import { sendChatMessagesOfReceivedSellOfferTradeRequest } from "./sendChatMessagesOfReceivedSellOfferTradeRequest";

export const peach069API = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  createBuyOffer: createBuyOffer(options, helpers),
  getBuyOffers: getBuyOffers(options, helpers),
  getBuyOfferById: getBuyOfferById(options, helpers),
  getBuyOfferTradeRequestPerformedById: getBuyOfferTradeRequestPerformedById(
    options,
    helpers,
  ),
  performBuyOfferTradeRequest: performBuyOfferTradeRequest(options, helpers),
  removePerformedBuyOfferTradeRequest: removePerformedBuyOfferTradeRequest(
    options,
    helpers,
  ),
  getBuyOfferTradeRequestsReceivedById: getBuyOfferTradeRequestsReceivedById(
    options,
    helpers,
  ),
  getBuyOfferTradeRequestReceivedByIds: getBuyOfferTradeRequestReceivedByIds(
    options,
    helpers,
  ),
  getSellOfferTradeRequestReceivedByIds: getSellOfferTradeRequestReceivedByIds(
    options,
    helpers,
  ),
  rejectBuyOfferTradeRequestReceivedByIds:
    rejectBuyOfferTradeRequestReceivedByIds(options, helpers),
  acceptBuyOfferTradeRequestReceivedByIds:
    acceptBuyOfferTradeRequestReceivedByIds(options, helpers),
  getSellOffers: getSellOffers(options, helpers),
  getSellOfferById: getSellOfferById(options, helpers),
  getSellOfferTradeRequestPerformedById: getSellOfferTradeRequestPerformedById(
    options,
    helpers,
  ),
  removePerformedSellOfferTradeRequest: removePerformedSellOfferTradeRequest(
    options,
    helpers,
  ),
  getSellOfferTradeRequestsReceivedById: getSellOfferTradeRequestsReceivedById(
    options,
    helpers,
  ),
  rejectSellOfferTradeRequestReceivedByIds:
    rejectSellOfferTradeRequestReceivedByIds(options, helpers),
  acceptSellOfferTradeRequestReceivedByIds:
    acceptSellOfferTradeRequestReceivedByIds(options, helpers),
  performSellOfferTradeRequest: performSellOfferTradeRequest(options, helpers),
  getChatMessagesOfPerformedBuyOfferTradeRequest:
    getChatMessagesOfPerformedBuyOfferTradeRequest(options, helpers),
  sendChatMessagesOfPerformedBuyOfferTradeRequest:
    sendChatMessagesOfPerformedBuyOfferTradeRequest(options, helpers),
  sendChatMessagesOfPerformedSellOfferTradeRequest:
    sendChatMessagesOfPerformedSellOfferTradeRequest(options, helpers),
  getChatMessagesOfReceivedBuyOfferTradeRequest:
    getChatMessagesOfReceivedBuyOfferTradeRequest(options, helpers),
  sendChatMessagesOfReceivedBuyOfferTradeRequest:
    sendChatMessagesOfReceivedBuyOfferTradeRequest(options, helpers),
  sendChatMessagesOfReceivedSellOfferTradeRequest:
    sendChatMessagesOfReceivedSellOfferTradeRequest(options, helpers),
  getChatMessagesOfReceivedSellOfferTradeRequest:
    getChatMessagesOfReceivedSellOfferTradeRequest(options, helpers),
  getChatMessagesOfPerformedSellOfferTradeRequest:
    getChatMessagesOfPerformedSellOfferTradeRequest(options, helpers),
  canPerformInstantTradeWithSellOfferById:
    canPerformInstantTradeWithSellOfferById(options, helpers),
  performInstantTradeWithSellOfferById: performInstantTradeWithSellOfferById(
    options,
    helpers,
  ),
});
