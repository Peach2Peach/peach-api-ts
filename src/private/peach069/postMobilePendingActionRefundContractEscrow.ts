import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionRefundContractEscrowRequestParams = { contractId: string };
export type PostMobilePendingActionRefundContractEscrowRequestQuery = {};
export type PostMobilePendingActionRefundContractEscrowRequestBody = {
  signature: string;
};

type Props = RequestProps &
  PostMobilePendingActionRefundContractEscrowRequestParams &
  PostMobilePendingActionRefundContractEscrowRequestQuery &
  PostMobilePendingActionRefundContractEscrowRequestBody;

export const postMobilePendingActionRefundContractEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signature }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/refundEscrowContract/${contractId}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        signature,
      }),
    });

    return parseResponse<
      { success: boolean },
      APIError<"UNAUTHORIZED">
    >(response);
  };
