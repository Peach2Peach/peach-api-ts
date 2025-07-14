import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type RejectBuyOfferTradeRequestByIdsRequestParams = {
  buyOfferId: number;
  userId: string;
};
export type RejectBuyOfferTradeRequestByIdsRequestQuery = {};
export type RejectBuyOfferTradeRequestByIdsRequestBody = {};

type Props = RequestProps &
  RejectBuyOfferTradeRequestByIdsRequestParams &
  RejectBuyOfferTradeRequestByIdsRequestQuery &
  RejectBuyOfferTradeRequestByIdsRequestBody;

export const rejectBuyOfferTradeRequestReceivedByIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId, userId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestReceived/${userId}`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "DELETE",
    });

    return parseResponse<void, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
