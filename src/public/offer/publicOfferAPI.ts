import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { getOffer } from "./getOffer";

export const publicOfferAPI = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  getOffer: getOffer(options, helpers),
});
