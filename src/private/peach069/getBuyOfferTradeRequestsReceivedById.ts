import { APIError } from "../../@types/global";
import { BuyOffer69TradeRequest } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetBuyOfferTradeRequestsReceivedByIdRequestParams = {
  buyOfferId: number;
};
export type GetBuyOfferTradeRequestsReceivedByIdRequestQuery = {};
export type GetBuyOfferTradeRequestsReceivedByIdRequestBody = {};

type Props = RequestProps &
  GetBuyOfferTradeRequestsReceivedByIdRequestParams &
  GetBuyOfferTradeRequestsReceivedByIdRequestQuery &
  GetBuyOfferTradeRequestsReceivedByIdRequestBody;

export const getBuyOfferTradeRequestsReceivedById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestReceived/`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      BuyOffer69TradeRequest[],
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
