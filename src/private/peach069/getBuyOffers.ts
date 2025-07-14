import { APIError } from "../../@types/global";
import { BuyOffer69 } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetBuyOfferRequestParams = {};
export type GetBuyOfferRequestQuery = {
  minAmountSats?: number;
  maxAmountSats?: number;
  ownOffers?: boolean;
};

export type GetBuyOfferRequestBody = {};

type Props = RequestProps &
  GetBuyOfferRequestParams &
  GetBuyOfferRequestQuery &
  GetBuyOfferRequestBody;

export const getBuyOffers =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ minAmountSats, maxAmountSats, ownOffers }: Props) => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries({
      minAmountSats,
      maxAmountSats,
      ownOffers,
    })) {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    }

    const endpointUrl = `${url}/v069/buyOffer`;
    const finalUrl = `${endpointUrl}?${searchParams.toString()}`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<BuyOffer69[], APIError<"UNAUTHORIZED">>(response);
  };
