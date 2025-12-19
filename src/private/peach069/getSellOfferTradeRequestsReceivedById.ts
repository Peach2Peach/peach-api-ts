import { APIError } from "../../@types/global";
import { SellOffer69TradeRequest } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetSellOfferTradeRequestsReceivedByIdRequestParams = {
  sellOfferId: string;
};
export type GetSellOfferTradeRequestsReceivedByIdRequestQuery = {};
export type GetSellOfferTradeRequestsReceivedByIdRequestBody = {};

type Props = RequestProps &
  GetSellOfferTradeRequestsReceivedByIdRequestParams &
  GetSellOfferTradeRequestsReceivedByIdRequestQuery &
  GetSellOfferTradeRequestsReceivedByIdRequestBody;

export const getSellOfferTradeRequestsReceivedById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestReceived/`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      SellOffer69TradeRequest[],
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
