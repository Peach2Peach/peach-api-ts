import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type SubmitSellOfferInstantTradeSignatureRequestParams = {
  sellOfferId: string;
};
export type SubmitSellOfferInstantTradeSignatureRequestQuery = {};
export type SubmitSellOfferInstantTradeSignatureRequestBody = {
  /** compact hex ECDSA signature (Peach ID key) over sha256 of the declaration */
  instantTradeSignature: string;
};

type Props = RequestProps &
  SubmitSellOfferInstantTradeSignatureRequestParams &
  SubmitSellOfferInstantTradeSignatureRequestQuery &
  SubmitSellOfferInstantTradeSignatureRequestBody;

export const submitSellOfferInstantTradeSignature =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId, instantTradeSignature }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/instantTradeSignature`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({ instantTradeSignature }),
    });

    return parseResponse<
      APISuccess,
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
