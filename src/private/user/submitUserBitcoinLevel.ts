import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type UserBitcoinLevel = "firstTime" | "firstTimeP2P" | "bitcoiner";
type Props = RequestProps & { bitcoinLevel: UserBitcoinLevel };

export const submitUserBitcoinLevel =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ bitcoinLevel, signal }: Props) => {
    const response = await helpers.fetch(`${url}/v1/user/bitcoinLevel`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        bitcoinLevel,
      }),
      signal,
    });

    return parseResponse<APISuccess, APIError<string | null>>(response);
  };
