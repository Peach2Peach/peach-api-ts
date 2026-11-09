import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";
import { getOk } from "../../utils/result";

export type SubmitBuyOfferPublicKeyRequestParams = { buyOfferId: string };
export type SubmitBuyOfferPublicKeyRequestBody = {
  publicKey: string;
  userSignature: string;
  publicKeySignature: string;
};

type Props = RequestProps &
  SubmitBuyOfferPublicKeyRequestParams &
  SubmitBuyOfferPublicKeyRequestBody;

export const submitBuyOfferPublicKey =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId, publicKey, userSignature, publicKeySignature }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v069/buyOffer/${String(buyOfferId)}/publicKey`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({ publicKey, userSignature, publicKeySignature }),
      },
    );

    // success has an empty body, which parseResponse would fail to parse as JSON
    if (response.status === 200) return getOk(true);

    return parseResponse<true, APIError<string>>(response);
  };
