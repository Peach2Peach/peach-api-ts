import { APIError } from "../../@types/global";
import { SellOffer } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetSellOfferRequestParams = {};
export type GetSellOfferRequestQuery = {
  minAmountSats?: number;
  maxAmountSats?: number;
};

export type GetSellOfferRequestBody = {};

type Props = RequestProps &
  GetSellOfferRequestParams &
  GetSellOfferRequestQuery &
  GetSellOfferRequestBody;

export const getSellOffers =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ minAmountSats, maxAmountSats }: Props) => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries({
      minAmountSats,
      maxAmountSats,
    })) {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    }

    const endpointUrl = `${url}/v069/sellOffer`;
    const finalUrl = `${endpointUrl}?${searchParams.toString()}`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<SellOffer[], APIError<"UNAUTHORIZED">>(response);
  };
