import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type CanPerformInstantTradeWithBuyOfferByIdRequestParams = {
  buyOfferId: string;
};
export type CanPerformInstantTradeWithBuyOfferByIdRequestQuery = {};
export type CanPerformInstantTradeWithBuyOfferByIdRequestBody = {};

type Props = RequestProps &
  CanPerformInstantTradeWithBuyOfferByIdRequestParams &
  CanPerformInstantTradeWithBuyOfferByIdRequestQuery &
  CanPerformInstantTradeWithBuyOfferByIdRequestBody;

export const canPerformInstantTradeWithBuyOfferById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/canPerformInstantTrade`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });
    return parseResponse<
      { result: boolean },
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
