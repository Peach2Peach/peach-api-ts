import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { contractId: string };

export const extendPaymentTimer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/contract/${contractId}/extendTime`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "PATCH",
        signal,
      },
    );

    return parseResponse<APISuccess, APIError<"NOT_FOUND" | "UNAUTHORIZED">>(
      response,
    );
  };
