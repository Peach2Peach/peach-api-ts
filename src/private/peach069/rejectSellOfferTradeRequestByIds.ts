import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type RejectSellOfferTradeRequestByIdsRequestParams = {
  sellOfferId: string;
  userId: string;
};
export type RejectSellOfferTradeRequestByIdsRequestQuery = {};
export type RejectSellOfferTradeRequestByIdsRequestBody = {};

type Props = RequestProps &
  RejectSellOfferTradeRequestByIdsRequestParams &
  RejectSellOfferTradeRequestByIdsRequestQuery &
  RejectSellOfferTradeRequestByIdsRequestBody;

export const rejectSellOfferTradeRequestReceivedByIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId, userId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestReceived/${userId}`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "DELETE",
    });

    return parseResponse<void, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
