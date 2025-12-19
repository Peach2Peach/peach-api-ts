import { APIError } from "../../@types/global";
import { SellOffer } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetSellOfferRequestParams = {};
export type GetSellOfferRequestQuery = {
  minAmountSats?: number;
  maxAmountSats?: number;
  maxPremium?: number;
  currencies?: string[];
  paymentMethods?: string[];
  offersSorter?: string;
};

export type GetSellOfferRequestBody = {};

type Props = RequestProps &
  GetSellOfferRequestParams &
  GetSellOfferRequestQuery &
  GetSellOfferRequestBody;

export const getSellOffers =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    minAmountSats,
    maxAmountSats,
    maxPremium,
    currencies,
    paymentMethods,
    offersSorter,
  }: Props) => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries({
      minAmountSats,
      maxAmountSats,
      maxPremium,
      currencies,
      paymentMethods,
      offersSorter,
    })) {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    }

    const endpointUrl = `${url}/v069/sellOffer`;
    const finalUrl = `${endpointUrl}?${searchParams.toString()}`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      {
        stats: any;
        offers: (SellOffer & {
          allowedToInstantTrade: boolean;
          hasPerformedTradeRequest: boolean;
        })[];
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
