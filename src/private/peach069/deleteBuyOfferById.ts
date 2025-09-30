import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type DeleteBuyOfferByIdRequestParams = { buyOfferId: string };
export type DeleteBuyOfferByIdRequestQuery = {};
export type DeleteBuyOfferByIdRequestBody = {};

type Props = RequestProps &
  DeleteBuyOfferByIdRequestParams &
  DeleteBuyOfferByIdRequestQuery &
  DeleteBuyOfferByIdRequestBody;

export const deleteBuyOfferById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${String(buyOfferId)}`; 

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "DELETE",
    });
    return parseResponse<void, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
