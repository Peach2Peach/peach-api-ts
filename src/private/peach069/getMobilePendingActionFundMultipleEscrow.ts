import { APIError } from "../../@types/global";
import { MobilePendingActionFundMultipleEscrow } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionFundMultipleEscrowRequestParams = { id: string };
export type GetMobilePendingActionFundMultipleEscrowRequestQuery = {};
export type GetMobilePendingActionFundMultipleEscrowRequestBody = {};

type Props = RequestProps &
  GetMobilePendingActionFundMultipleEscrowRequestParams &
  GetMobilePendingActionFundMultipleEscrowRequestQuery &
  GetMobilePendingActionFundMultipleEscrowRequestBody;

export const getMobilePendingActionFundMultipleEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/fundMultipleEscrow/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      MobilePendingActionFundMultipleEscrow,
      APIError<"UNAUTHORIZED">
    >(response);
  };
