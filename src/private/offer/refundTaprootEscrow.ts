import {
  RefundTaprootEscrowErrorResponseBody,
  RefundTaprootEscrowRequestBody,
  RefundTaprootEscrowRequestParams,
  RefundTaprootEscrowRequestQuery,
  RefundTaprootEscrowResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  RefundTaprootEscrowRequestParams &
  RefundTaprootEscrowRequestQuery &
  RefundTaprootEscrowRequestBody;

/**
 * @description refund of a taproot (escrow version 2) escrow. Peach signs the
 * CSV script path alone, the wallet does not participate. Only succeeds once
 * the relative timelock of the funding UTXO has matured
 */
export const refundTaprootEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/taproot-escrow/refund`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        signal,
      },
    );

    return parseResponse<
      RefundTaprootEscrowResponseBody,
      RefundTaprootEscrowErrorResponseBody
    >(response);
  };
