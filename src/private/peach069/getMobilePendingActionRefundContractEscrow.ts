import { APIError } from "../../@types/global";
import { MobilePendingActionContract } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionRefundContractEscrowRequestParams = { contractId: string };
export type GetMobilePendingActionRefundContractEscrowRequestQuery = {};
export type GetMobilePendingActionRefundContractEscrowRequestBody = {};

type Props = RequestProps &
  GetMobilePendingActionRefundContractEscrowRequestParams &
  GetMobilePendingActionRefundContractEscrowRequestQuery &
  GetMobilePendingActionRefundContractEscrowRequestBody;

export const getMobilePendingActionRefundContractEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/refundEscrowContract/${contractId}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      MobilePendingActionContract,
      APIError<"UNAUTHORIZED">
    >(response);
  };
