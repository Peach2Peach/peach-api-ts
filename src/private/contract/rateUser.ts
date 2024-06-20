import {
  RateUserErrorResponseBody,
  RateUserRequestBody,
  RateUserRequestParams,
  RateUserRequestQuery,
  RateUserResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  RateUserRequestParams &
  RateUserRequestQuery &
  RateUserRequestBody;

export const rateUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, rating, signature, signal }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/user/rate`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        rating,
        signature,
      }),
      signal,
    });

    return parseResponse<RateUserResponseBody, RateUserErrorResponseBody>(
      response,
    );
  };
