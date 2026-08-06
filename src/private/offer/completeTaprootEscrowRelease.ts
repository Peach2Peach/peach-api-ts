import {
  CompleteTaprootEscrowReleaseErrorResponseBody,
  CompleteTaprootEscrowReleaseRequestBody,
  CompleteTaprootEscrowReleaseRequestParams,
  CompleteTaprootEscrowReleaseRequestQuery,
  CompleteTaprootEscrowReleaseResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  CompleteTaprootEscrowReleaseRequestParams &
  CompleteTaprootEscrowReleaseRequestQuery &
  CompleteTaprootEscrowReleaseRequestBody;

/**
 * @description round 2 of the MuSig2 release of a taproot (escrow version 2)
 * escrow: the seller sends its public nonce and partial signature, Peach
 * aggregates both partial signatures and broadcasts the release transaction
 */
export const completeTaprootEscrowRelease =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    sessionId,
    sellerPubNonce,
    sellerPartialSig,
    signal,
  }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/taproot-escrow/release/complete`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          sessionId,
          sellerPubNonce,
          sellerPartialSig,
        }),
        signal,
      },
    );

    return parseResponse<
      CompleteTaprootEscrowReleaseResponseBody,
      CompleteTaprootEscrowReleaseErrorResponseBody
    >(response);
  };
