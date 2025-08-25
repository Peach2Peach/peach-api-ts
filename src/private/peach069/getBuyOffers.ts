import { APIError } from "../../@types/global";
import { BuyOffer69, TradeStatus } from "../../@types/offer";
import { User } from "../../@types/user";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetBuyOfferRequestParams = {};
export type GetBuyOfferRequestQuery = {
  minAmountSats?: number;
  maxAmountSats?: number;
  minPremium?: number;
  currencies?: string[];
  paymentMethods?: string[];
  ownOffers?: boolean;
  offersSorter?: string;
};

export type GetBuyOfferRequestBody = {};

type Props = RequestProps &
  GetBuyOfferRequestParams &
  GetBuyOfferRequestQuery &
  GetBuyOfferRequestBody;

export const getBuyOffers =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    minAmountSats,
    maxAmountSats,
    minPremium,
    currencies,
    paymentMethods,
    ownOffers,
    offersSorter,
  }: Props) => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries({
      minAmountSats,
      maxAmountSats,
      minPremium,
      ownOffers,
      currencies,
      paymentMethods,
      offersSorter,
    })) {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    }

    const endpointUrl = `${url}/v069/buyOffer`;
    const finalUrl = `${endpointUrl}?${searchParams.toString()}`;

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      (BuyOffer69 & {
        tradeStatusNew?: TradeStatus;
        user: User;
        allowedToInstantTrade: boolean;
        hasPerformedTradeRequest: boolean;
      })[],
      APIError<"UNAUTHORIZED">
    >(response);
  };
