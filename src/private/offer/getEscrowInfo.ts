import { APIError } from "../../@types/global";
import { FundingStatus } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };
type Response = {
  offerId: string;
  escrow: string;
  returnAddress: string;
  funding: FundingStatus;
  userConfirmationRequired: boolean;
};
type ResponseError = APIError<"NOT_FOUND" | "BAD_REQUEST">;

export const getEscrowInfo =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/escrow`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<Response, ResponseError>(response);
  };
