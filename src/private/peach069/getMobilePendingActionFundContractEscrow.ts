import { APIError } from "../../@types/global";
import { MobilePendingActionContract } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionFundContractEscrowRequestParams = { contractId: string };
export type GetMobilePendingActionFundContractEscrowRequestQuery = {};
export type GetMobilePendingActionFundContractEscrowRequestBody = {};

type Props = RequestProps &
  GetMobilePendingActionFundContractEscrowRequestParams &
  GetMobilePendingActionFundContractEscrowRequestQuery &
  GetMobilePendingActionFundContractEscrowRequestBody;

export const getMobilePendingActionFundContractEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/fundEscrowContract/${contractId}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      MobilePendingActionContract,
      APIError<"UNAUTHORIZED">
    >(response);
  };
