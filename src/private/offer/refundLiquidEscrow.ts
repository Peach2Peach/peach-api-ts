import {
  RefundLiquidEscrowErrorResponseBody,
  RefundLiquidEscrowRequestBody,
  RefundLiquidEscrowRequestParams,
  RefundLiquidEscrowRequestQuery,
  RefundLiquidEscrowResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  RefundLiquidEscrowRequestParams &
  RefundLiquidEscrowRequestQuery &
  RefundLiquidEscrowRequestBody;

/** Fully server-side: Peach signs the CSV script path alone, the wallet does
 * not participate. Only succeeds once the escrow's relative timelock has
 * matured; before that it returns BAD_REQUEST. */
export const refundLiquidEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/liquid-escrow/refund`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({}),
        signal,
      },
    );

    return parseResponse<
      RefundLiquidEscrowResponseBody,
      RefundLiquidEscrowErrorResponseBody
    >(response);
  };
