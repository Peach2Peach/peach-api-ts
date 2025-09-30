import { APIError } from "../../@types/global";
import { Match } from "../../@types/match";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string; matchId: string };
type GetMatchErrorResponseBody = APIError<
  "NOT_FOUND" | "CONTRACT_EXISTS" | "CANCELED"
>;

export const getMatch =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, matchId, signal }: Props) => {
    const response = await helpers.fetch(
      `${url}/v1/offer/${offerId}/match/${matchId}`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<Match, GetMatchErrorResponseBody>(response);
  };
