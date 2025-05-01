import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { contractId: string; start: number; end: number };

export const setMessageRead =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, start, end, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/contract/${contractId}/chat/received`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          start,
          end,
        }),
        signal,
      },
    );

    return parseResponse<APISuccess, APIError<"NOT_FOUND">>(response);
  };
