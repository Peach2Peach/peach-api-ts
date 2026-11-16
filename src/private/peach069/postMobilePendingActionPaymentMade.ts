import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionPaymentMadeRequestParams = {id:string};
export type PostMobilePendingActionPaymentMadeRequestQuery = {};
export type PostMobilePendingActionPaymentMadeRequestBody = {
    releaseAddress?: string;
  releaseAddressMessageSignature?: string;
  peachUserSignature?: string;
  buyerOnlyEscrowReleaseTx?: string;
};

type Props = RequestProps &
  PostMobilePendingActionPaymentMadeRequestParams &
  PostMobilePendingActionPaymentMadeRequestQuery &
  PostMobilePendingActionPaymentMadeRequestBody;

export const postMobilePendingActionPaymentMade =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({id, releaseAddress, releaseAddressMessageSignature, peachUserSignature, buyerOnlyEscrowReleaseTx}: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/paymentMade/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
          releaseAddress,
          releaseAddressMessageSignature,
          peachUserSignature,
          buyerOnlyEscrowReleaseTx,
        }),

    });

    return parseResponse<
      {success:boolean},
      APIError<"UNAUTHORIZED">
    >(response);
  };
