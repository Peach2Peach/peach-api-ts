import {
  StartLiquidEscrowReleaseErrorResponseBody,
  StartLiquidEscrowReleaseRequestBody,
  StartLiquidEscrowReleaseRequestParams,
  StartLiquidEscrowReleaseRequestQuery,
  StartLiquidEscrowReleaseResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  StartLiquidEscrowReleaseRequestParams &
  StartLiquidEscrowReleaseRequestQuery &
  StartLiquidEscrowReleaseRequestBody;

/** Round 1 of the MuSig2 release. The server picks the destination itself (it
 * creates the Boltz chain swap), so the body is empty. */
export const startLiquidEscrowRelease =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/liquid-escrow/release/start`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({}),
        signal,
      },
    );

    return parseResponse<
      StartLiquidEscrowReleaseResponseBody,
      StartLiquidEscrowReleaseErrorResponseBody
    >(response);
  };
