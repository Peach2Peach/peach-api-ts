import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };
type Response = "NULL" | "MEMPOOL" | "FUNDED";
type ResponseError = APIError<"NOT_FOUND" | "BAD_REQUEST">;

export const getFundingStatus =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/fundingStatus`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<Response, ResponseError>(response);
  };
