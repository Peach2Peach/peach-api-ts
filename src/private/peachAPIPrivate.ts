import { PeachAPIHelpers, PeachAPIOptions } from "../types";
import { privateContractAPI } from "./contract/privateContractAPI";
import { privateOfferAPI } from "./offer/privateOfferAPI";
import { privateUserAPI } from "./user/privateUserAPI";

export const peachAPIPrivate = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers
) => ({
  contract: privateContractAPI(options, helpers),
  offer: privateOfferAPI(options, helpers),
  user: privateUserAPI(options, helpers),
});
