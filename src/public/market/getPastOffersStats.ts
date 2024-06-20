import { APIError } from "../../@types/global";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type GetHistoricalOfferDataRequestBody = {
  meansOfPayment?: MeansOfPayment;
};
type GetHistoricalOfferDataResponseBody = {
  avgPremium: number;
};
type GetHistoricalOfferDataErrorResponseBody = APIError<null>;

export const getPastOffersStats =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    signal,
    meansOfPayment,
  }: RequestProps & GetHistoricalOfferDataRequestBody = {}) => {
    const response = await fetch(`${url}/v1/market/offers/stats/history`, {
      headers: helpers.getPublicHeaders(url),
      method: "POST",
      signal,
      body: JSON.stringify({ meansOfPayment }),
    });
    return parseResponse<
      GetHistoricalOfferDataResponseBody,
      GetHistoricalOfferDataErrorResponseBody
    >(response);
  };
