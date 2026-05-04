import { APIError } from "../../@types/global";
import { MobilePendingActionRefund } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionRefundRequestParams = {id:string};
export type GetMobilePendingActionRefundRequestQuery = {};
export type GetMobilePendingActionRefundRequestBody = {};

type Props = RequestProps &
  GetMobilePendingActionRefundRequestParams &
  GetMobilePendingActionRefundRequestQuery &
  GetMobilePendingActionRefundRequestBody;

export const getMobilePendingActionRefund =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({id}: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/refund/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      MobilePendingActionRefund,
      APIError<"UNAUTHORIZED">
    >(response);
  };
