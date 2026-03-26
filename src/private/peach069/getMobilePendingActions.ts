import { APIError } from "../../@types/global";
import { MobilePendingActionContract, MobilePendingActionRefund } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionsRequestParams = {};
export type GetMobilePendingActionsRequestQuery = {};
export type GetMobilePendingActionsRequestBody = {};

type Props = RequestProps &
  GetMobilePendingActionsRequestParams &
  GetMobilePendingActionsRequestQuery &
  GetMobilePendingActionsRequestBody;

export const getMobilePendingActions =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({}: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      {
        refundPendingActions: MobilePendingActionRefund[];
        paymentMadePendingActions: MobilePendingActionContract[];
        paymentConfirmedPendingActions: MobilePendingActionContract[];
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
