import { MatchFilter } from "../../@types/api/offerAPI";
import { APIError, APISuccess } from "../../@types/global";
import { OfferPaymentData } from "../../@types/offer";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PatchOfferRequestParams = { offerId: string };
export type PatchOfferRequestQuery = {};
export type PatchOfferRequestBody = {
  refundAddress?: string;
  refundTx?: string;
  premium?: number;
  releaseAddress?: string;
  messageSignature?: string;
  amount?: [number, number];
  meansOfPayment?: MeansOfPayment;
  paymentData?: OfferPaymentData;
} & MatchFilter;
export type PatchOfferResponseBody = APISuccess;
export type PatchOfferErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED" | "INVALID_SIGNATURE"
>;

type Props = RequestProps &
  PatchOfferRequestParams &
  PatchOfferRequestQuery &
  PatchOfferRequestBody;

export const patchOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    refundAddress,
    releaseAddress,
    messageSignature,
    refundTx,
    premium,
    maxPremium,
    minReputation,
    amount,
    meansOfPayment,
    paymentData,
    signal,
  }: Props) => {
    const response = await helpers.fetchWithAuth(`${url}/v1/offer/${offerId}`, {
      headers: helpers.getPrivateHeaders(url),
      method: "PATCH",
      body: JSON.stringify({
        refundAddress,
        refundTx,
        premium,
        maxPremium,
        minReputation,
        releaseAddress,
        messageSignature,
        amount,
        meansOfPayment,
        paymentData,
      }),
      signal,
    });

    return parseResponse<PatchOfferResponseBody, PatchOfferErrorResponseBody>(
      response,
    );
  };
