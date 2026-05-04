import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionFundMultipleEscrowRequestParams = { id: string };
export type PostMobilePendingActionFundMultipleEscrowRequestQuery = {};
export type PostMobilePendingActionFundMultipleEscrowRequestBody = { txHex: string };

type Props = RequestProps &
  PostMobilePendingActionFundMultipleEscrowRequestParams &
  PostMobilePendingActionFundMultipleEscrowRequestQuery &
  PostMobilePendingActionFundMultipleEscrowRequestBody;

export const postMobilePendingActionFundMultipleEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id, txHex }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/fundMultipleEscrow/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({ txHex }),
    });

    return parseResponse<{ success: boolean }, APIError<"UNAUTHORIZED">>(
      response,
    );
  };
