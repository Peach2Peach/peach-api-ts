import { APIError } from "../../@types/global";
import { SellOffer69TradeRequest } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetSellOfferTradeRequestPerformedByIdRequestParams = {
  sellOfferId: string;
};
export type GetSellOfferTradeRequestPerformedByIdRequestQuery = {};
export type GetSellOfferTradeRequestPerformedByIdRequestBody = {};

type Props = RequestProps &
  GetSellOfferTradeRequestPerformedByIdRequestParams &
  GetSellOfferTradeRequestPerformedByIdRequestQuery &
  GetSellOfferTradeRequestPerformedByIdRequestBody;

export const getSellOfferTradeRequestPerformedById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestPerformed/`;

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      SellOffer69TradeRequest,
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
