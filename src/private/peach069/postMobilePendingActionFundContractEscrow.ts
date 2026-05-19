import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionFundContractEscrowRequestParams = { id: string };
export type PostMobilePendingActionFundContractEscrowRequestQuery = {};
export type PostMobilePendingActionFundContractEscrowRequestBody = { txHex: string };

type Props = RequestProps &
  PostMobilePendingActionFundContractEscrowRequestParams &
  PostMobilePendingActionFundContractEscrowRequestQuery &
  PostMobilePendingActionFundContractEscrowRequestBody;

export const postMobilePendingActionFundContractEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id, txHex }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/fundEscrowContract/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({ txHex }),
    });

    return parseResponse<{ success: boolean }, APIError<"UNAUTHORIZED">>(
      response,
    );
  };
