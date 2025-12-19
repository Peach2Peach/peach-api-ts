import { APIError } from "../../@types/global";
import { BuyOffer69 } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetBuyOfferByIdRequestParams = { buyOfferId: string };
export type GetBuyOfferByIdRequestQuery = {};
export type GetBuyOfferByIdRequestBody = { premium: number };

type Props = RequestProps &
  GetBuyOfferByIdRequestParams &
  GetBuyOfferByIdRequestQuery &
  GetBuyOfferByIdRequestBody;

export const patchBuyOfferPremiumById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId, premium }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${String(buyOfferId)}`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "PATCH",
      body: JSON.stringify({ premium }),
    });
    return parseResponse<BuyOffer69, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
