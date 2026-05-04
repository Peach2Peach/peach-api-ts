import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionFundEscrowRequestParams = { id: string };
export type PostMobilePendingActionFundEscrowRequestQuery = {};
export type PostMobilePendingActionFundEscrowRequestBody = { txHex: string };

type Props = RequestProps &
  PostMobilePendingActionFundEscrowRequestParams &
  PostMobilePendingActionFundEscrowRequestQuery &
  PostMobilePendingActionFundEscrowRequestBody;

export const postMobilePendingActionFundEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id, txHex }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/fundEscrow/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({ txHex }),
    });

    return parseResponse<{ success: boolean }, APIError<"UNAUTHORIZED">>(
      response,
    );
  };
