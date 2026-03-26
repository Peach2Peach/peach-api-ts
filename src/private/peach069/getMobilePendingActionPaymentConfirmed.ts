import { APIError } from "../../@types/global";
import { MobilePendingActionContract } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionPaymentConfirmedRequestParams = {id:string};
export type GetMobilePendingActionPaymentConfirmedRequestQuery = {};
export type GetMobilePendingActionPaymentConfirmedRequestBody = {};

type Props = RequestProps &
  GetMobilePendingActionPaymentConfirmedRequestParams &
  GetMobilePendingActionPaymentConfirmedRequestQuery &
  GetMobilePendingActionPaymentConfirmedRequestBody;

export const getMobilePendingActionPaymentConfirmed =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({id}: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/paymentConfirmed/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      MobilePendingActionContract,
      APIError<"UNAUTHORIZED">
    >(response);
  };
