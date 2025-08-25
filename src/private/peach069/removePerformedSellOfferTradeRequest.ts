import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type RemovePerformedSellOfferTradeRequestRequestParams = {
  sellOfferId: string;
};
export type RemovePerformedSellOfferTradeRequestRequestQuery = {};
export type RemovePerformedSellOfferTradeRequestRequestBody = {};

type Props = RequestProps &
  RemovePerformedSellOfferTradeRequestRequestParams &
  RemovePerformedSellOfferTradeRequestRequestQuery &
  RemovePerformedSellOfferTradeRequestRequestBody;

export const removePerformedSellOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestPerformed`;

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "DELETE",
    });
    return parseResponse<void, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
