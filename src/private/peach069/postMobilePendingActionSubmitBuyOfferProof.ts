import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionSubmitBuyOfferProofRequestParams = {
  id: string;
};
export type PostMobilePendingActionSubmitBuyOfferProofRequestBody = {
  publicKey: string;
  userSignature: string;
  publicKeySignature: string;
};

type Props = RequestProps &
  PostMobilePendingActionSubmitBuyOfferProofRequestParams &
  PostMobilePendingActionSubmitBuyOfferProofRequestBody;

export const postMobilePendingActionSubmitBuyOfferProof =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id, publicKey, userSignature, publicKeySignature }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/submitBuyOfferProof/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({ publicKey, userSignature, publicKeySignature }),
    });

    return parseResponse<{ success: boolean }, APIError<string>>(response);
  };
