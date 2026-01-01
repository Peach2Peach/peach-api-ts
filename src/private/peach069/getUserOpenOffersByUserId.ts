import { APIError } from "../../@types/global";
import { BuyOffer69, SellOffer } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetUserOffersByUserIdRequestParams = { userId: string };
export type GetUserOffersByUserIdRequestQuery = {};
export type GetUserOffersByUserIdRequestBody = {};

type Props = RequestProps &
  GetUserOffersByUserIdRequestParams &
  GetUserOffersByUserIdRequestQuery &
  GetUserOffersByUserIdRequestBody;

export const getUserOpenOffersByUserId =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ userId }: Props) => {
    const finalUrl = `${url}/v069/user/${userId}/offers`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });
    return parseResponse<
      {
        buyOffers: (BuyOffer69 & { hasPerformedTradeRequest: boolean })[];
        sellOffers: (SellOffer & { hasPerformedTradeRequest: boolean })[];
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
