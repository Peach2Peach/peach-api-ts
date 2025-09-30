import { PeachAPIHelpers, PeachAPIOptions } from "../types";
import { privateContractAPI } from "./contract/privateContractAPI";
import { privateOfferAPI } from "./offer/privateOfferAPI";
import { peach069API } from "./peach069/api";
import { privateUserAPI } from "./user/privateUserAPI";

export const peachAPIPrivate = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  contract: privateContractAPI(options, helpers),
  offer: privateOfferAPI(options, helpers),
  user: privateUserAPI(options, helpers),
  peach069: peach069API(options, helpers),
});
