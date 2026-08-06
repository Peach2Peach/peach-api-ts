import {
  StartTaprootEscrowReleaseErrorResponseBody,
  StartTaprootEscrowReleaseRequestBody,
  StartTaprootEscrowReleaseRequestParams,
  StartTaprootEscrowReleaseRequestQuery,
  StartTaprootEscrowReleaseResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  StartTaprootEscrowReleaseRequestParams &
  StartTaprootEscrowReleaseRequestQuery &
  StartTaprootEscrowReleaseRequestBody;

/**
 * @description round 1 of the MuSig2 release of a taproot (escrow version 2)
 * escrow: Peach builds the release transaction and publishes its public nonce
 */
export const startTaprootEscrowRelease =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/taproot-escrow/release/start`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        signal,
      },
    );

    return parseResponse<
      StartTaprootEscrowReleaseResponseBody,
      StartTaprootEscrowReleaseErrorResponseBody
    >(response);
  };
