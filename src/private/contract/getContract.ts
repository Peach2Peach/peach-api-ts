import { Contract } from "../../@types/contract";
import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { contractId: string };

export const getContract =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<
      Contract,
      APIError<"NOT_FOUND" | "INTERNAL_SERVER_ERROR">
    >(response);
  };
