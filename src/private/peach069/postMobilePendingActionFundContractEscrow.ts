import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionFundContractEscrowRequestParams = { contractId: string };
export type PostMobilePendingActionFundContractEscrowRequestQuery = {};
export type PostMobilePendingActionFundContractEscrowRequestBody = {};

type Props = RequestProps &
  PostMobilePendingActionFundContractEscrowRequestParams &
  PostMobilePendingActionFundContractEscrowRequestQuery &
  PostMobilePendingActionFundContractEscrowRequestBody;

export const postMobilePendingActionFundContractEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/fundEscrowContract/${contractId}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
    });

    return parseResponse<{ success: boolean }, APIError<"UNAUTHORIZED">>(
      response,
    );
  };
