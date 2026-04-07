import { APIError } from "../../@types/global";
import { MobilePendingActionFundEscrow } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionFundEscrowRequestParams = { id: string };
export type GetMobilePendingActionFundEscrowRequestQuery = {};
export type GetMobilePendingActionFundEscrowRequestBody = {};

type Props = RequestProps &
  GetMobilePendingActionFundEscrowRequestParams &
  GetMobilePendingActionFundEscrowRequestQuery &
  GetMobilePendingActionFundEscrowRequestBody;

export const getMobilePendingActionFundEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/fundEscrow/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      MobilePendingActionFundEscrow,
      APIError<"UNAUTHORIZED">
    >(response);
  };
