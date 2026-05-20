import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionRefundContractEscrowRequestParams = { id: string };
export type PostMobilePendingActionRefundContractEscrowRequestQuery = {};
export type PostMobilePendingActionRefundContractEscrowRequestBody = {
  signatures: string[];
};

type Props = RequestProps &
  PostMobilePendingActionRefundContractEscrowRequestParams &
  PostMobilePendingActionRefundContractEscrowRequestQuery &
  PostMobilePendingActionRefundContractEscrowRequestBody;

export const postMobilePendingActionRefundContractEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id, signatures }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/refundEscrowContract/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        signatures,
      }),
    });

    return parseResponse<
      { success: boolean },
      APIError<"UNAUTHORIZED">
    >(response);
  };
