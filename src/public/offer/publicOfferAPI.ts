import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { getPublicOffer } from "./getPublicOffer";

export const publicOfferAPI = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  getPublicOffer: getPublicOffer(options, helpers),
});
