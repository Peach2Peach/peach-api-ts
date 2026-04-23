import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionPaymentConfirmedRequestParams = {id:string};
export type PostMobilePendingActionPaymentConfirmedRequestQuery = {};
export type PostMobilePendingActionPaymentConfirmedRequestBody = {
   releaseTransactionSignature: string;
  batchReleasePsbt?: string;
};

type Props = RequestProps &
  PostMobilePendingActionPaymentConfirmedRequestParams &
  PostMobilePendingActionPaymentConfirmedRequestQuery &
  PostMobilePendingActionPaymentConfirmedRequestBody;

export const postMobilePendingActionPaymentConfirmed =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({id, releaseTransactionSignature, batchReleasePsbt}: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/paymentConfirmed/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
          releaseTransactionSignature,
          batchReleasePsbt
        }),

    });

    return parseResponse<
      {success:boolean},
      APIError<"UNAUTHORIZED">
    >(response);
  };
