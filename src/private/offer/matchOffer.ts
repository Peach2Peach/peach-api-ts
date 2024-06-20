import {
  MatchOfferErrorResponseBody,
  MatchOfferRequestBody,
  MatchOfferRequestParams,
  MatchOfferRequestQuery,
  MatchOfferResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  MatchOfferRequestParams &
  MatchOfferRequestQuery &
  MatchOfferRequestBody;

export const matchOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    currency,
    paymentMethod,
    paymentData,
    price,
    premium,
    maxMiningFeeRate,
    matchingOfferId,
    symmetricKeyEncrypted,
    symmetricKeySignature,
    paymentDataEncrypted,
    paymentDataSignature,
    instantTrade,
    signal,
  }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/match`, {
      headers: helpers.getPrivateHeaders(url),
      body: JSON.stringify({
        matchingOfferId,
        currency,
        paymentMethod,
        price,
        premium,
        maxMiningFeeRate,
        symmetricKeyEncrypted,
        symmetricKeySignature,
        paymentData,
        paymentDataEncrypted,
        paymentDataSignature,
        instantTrade,
      }),
      method: "POST",
      signal,
    });

    return parseResponse<MatchOfferResponseBody, MatchOfferErrorResponseBody>(
      response,
    );
  };
