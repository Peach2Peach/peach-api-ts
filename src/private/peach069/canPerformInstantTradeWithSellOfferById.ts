import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type CanPerformInstantTradeWithSellOfferByIdRequestParams = {
  sellOfferId: string;
};
export type CanPerformInstantTradeWithSellOfferByIdRequestQuery = {};
export type CanPerformInstantTradeWithSellOfferByIdRequestBody = {};

type Props = RequestProps &
  CanPerformInstantTradeWithSellOfferByIdRequestParams &
  CanPerformInstantTradeWithSellOfferByIdRequestQuery &
  CanPerformInstantTradeWithSellOfferByIdRequestBody;

export const canPerformInstantTradeWithSellOfferById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/canPerformInstantTrade`;

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });
    return parseResponse<
      { result: boolean },
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
