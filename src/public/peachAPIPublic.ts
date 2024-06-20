import { PeachAPIHelpers, PeachAPIOptions } from "../types";
import { publicBitcoinAPI } from "./bitcoin/publicBitcoinAPI";
import { publicContactAPI } from "./contact/publicContactAPI";
import { publicEventsAPI } from "./events/publicEventsAPI";
import { publicMarketAPI } from "./market/publicMarketAPI";
import { publicOfferAPI } from "./offer/publicOfferAPI";
import { publicSystemAPI } from "./system/publicSystemAPI";
import { publicUserAPI } from "./user/publicUserAPI";

export const peachAPIPublic = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  bitcoin: publicBitcoinAPI(options, helpers),
  contact: publicContactAPI(options, helpers),
  market: publicMarketAPI(options, helpers),
  events: publicEventsAPI(options, helpers),
  system: publicSystemAPI(options, helpers),
  user: publicUserAPI(options, helpers),
  offer: publicOfferAPI(options, helpers),
});
