import {
  GetPriceErrorResponseBody,
  GetPriceRequestBody,
  GetPriceRequestParams,
  GetPriceRequestQuery,
  GetPriceResponseBody,
} from "../../@types/api/marketAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetPriceRequestParams &
  GetPriceRequestQuery &
  GetPriceRequestBody;

export const marketPrice =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ pair, signal }: Props) => {
    const response = await fetch(`${url}/v1/market/price/${pair}`, {
      headers: helpers.getPublicHeaders(url),
      signal,
    });
    return parseResponse<GetPriceResponseBody, GetPriceErrorResponseBody>(
      response
    );
  };
