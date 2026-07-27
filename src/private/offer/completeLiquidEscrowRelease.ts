import {
  CompleteLiquidEscrowReleaseErrorResponseBody,
  CompleteLiquidEscrowReleaseRequestBody,
  CompleteLiquidEscrowReleaseRequestParams,
  CompleteLiquidEscrowReleaseRequestQuery,
  CompleteLiquidEscrowReleaseResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  CompleteLiquidEscrowReleaseRequestParams &
  CompleteLiquidEscrowReleaseRequestQuery &
  CompleteLiquidEscrowReleaseRequestBody;

/** Round 2 of the MuSig2 release. The session is single-use and short-lived
 * (5 min); on any error the caller must restart from
 * `startLiquidEscrowRelease` with a fresh nonce rather than retry this. */
export const completeLiquidEscrowRelease =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    sessionId,
    sellerPubNonce,
    sellerPartialSig,
    signal,
  }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/liquid-escrow/release/complete`,
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
      CompleteLiquidEscrowReleaseResponseBody,
      CompleteLiquidEscrowReleaseErrorResponseBody
    >(response);
  };
