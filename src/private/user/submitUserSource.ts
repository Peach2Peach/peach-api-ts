import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type UserSource =
  | "twitter"
  | "google"
  | "instagram"
  | "friend"
  | "telegram"
  | "linkedin"
  | "other";
type Props = RequestProps & { source: UserSource };

export const sumbitUserSource =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ source, signal }: Props) => {
    const response = await fetch(`${url}/v1/user/source`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        source,
      }),
      signal,
    });

    return parseResponse<APISuccess, APIError<string | null>>(response);
  };
