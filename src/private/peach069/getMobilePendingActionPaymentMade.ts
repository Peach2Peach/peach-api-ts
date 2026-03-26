import { APIError } from "../../@types/global";
import { MobilePendingActionContract } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionPaymentMadeRequestParams = {id:string};
export type GetMobilePendingActionPaymentMadeRequestQuery = {};
export type GetMobilePendingActionPaymentMadeRequestBody = {};

type Props = RequestProps &
  GetMobilePendingActionPaymentMadeRequestParams &
  GetMobilePendingActionPaymentMadeRequestQuery &
  GetMobilePendingActionPaymentMadeRequestBody;

export const getMobilePendingActionPaymentMade =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({id}: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/paymentMade/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      MobilePendingActionContract,
      APIError<"UNAUTHORIZED">
    >(response);
  };
