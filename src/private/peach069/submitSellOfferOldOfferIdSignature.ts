import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type SubmitSellOfferOldOfferIdSignatureRequestParams = {
  sellOfferId: string;
};
export type SubmitSellOfferOldOfferIdSignatureRequestQuery = {};
export type SubmitSellOfferOldOfferIdSignatureRequestBody = {
  /** armored detached PGP signature over "<oldOfferId>-<sellOfferId>" */
  oldOfferIdSignature: string;
};

type Props = RequestProps &
  SubmitSellOfferOldOfferIdSignatureRequestParams &
  SubmitSellOfferOldOfferIdSignatureRequestQuery &
  SubmitSellOfferOldOfferIdSignatureRequestBody;

export const submitSellOfferOldOfferIdSignature =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId, oldOfferIdSignature }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/oldOfferIdSignature`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({ oldOfferIdSignature }),
    });

    return parseResponse<
      APISuccess,
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
