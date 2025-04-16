import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type UserCryptoLevel = "firstTime" | "firstTimeP2P" | "bitcoiner";
type Props = RequestProps & { cryptoLevel: UserCryptoLevel };

export const submitUserCryptoLevel =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ cryptoLevel, signal }: Props) => {
    const response = await fetch(`${url}/v1/user/cryptoLevel`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        cryptoLevel,
      }),
      signal,
    });

    return parseResponse<APISuccess, APIError<string | null>>(response);
  };
