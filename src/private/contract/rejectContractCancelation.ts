import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { contractId: string };

export const rejectContractCancelation =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/contract/${contractId}/cancel/reject`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        signal,
      },
    );

    return parseResponse<APISuccess, APIError<"NOT_FOUND" | "UNAUTHORIZED">>(
      response,
    );
  };
