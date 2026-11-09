import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { contractId: string };

export const getBuyerOnlyEscrowRefundPsbt =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/contract/${contractId}/buyerOnlyEscrowRefundPsbt`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<
      { psbt: string },
      APIError<"FORBIDDEN" | "NOT_FOUND" | "TRANSACTION_INVALID">
    >(response);
  };
