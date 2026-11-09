import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { contractId: string; tx: string };

export const postBuyerOnlyEscrowRefund =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, tx, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/contract/${contractId}/buyerOnlyEscrowRefundPsbt`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({ tx }),
        signal,
      },
    );

    return parseResponse<
      { success: boolean; txId: string },
      APIError<"FORBIDDEN" | "NOT_FOUND" | "TRANSACTION_INVALID" | "FORM_INVALID">
    >(response);
  };
