import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type RemovePerformedBuyOfferTradeRequestRequestParams = {
  buyOfferId: number;
};
export type RemovePerformedBuyOfferTradeRequestRequestQuery = {};
export type RemovePerformedBuyOfferTradeRequestRequestBody = {};

type Props = RequestProps &
  RemovePerformedBuyOfferTradeRequestRequestParams &
  RemovePerformedBuyOfferTradeRequestRequestQuery &
  RemovePerformedBuyOfferTradeRequestRequestBody;

export const removePerformedBuyOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestPerformed`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "DELETE",
    });

    return parseResponse<void, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
