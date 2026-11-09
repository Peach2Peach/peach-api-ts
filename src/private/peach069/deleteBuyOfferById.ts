import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";
import { getOk } from "../../utils/result";

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

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "DELETE",
    });

    // success has an empty body, which parseResponse would fail to parse as JSON
    if (response.status === 200) return getOk(true);

    return parseResponse<true, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
