import { APIError } from "../../@types/global";
import { BuyOffer, SellOffer, Sorter } from "../../@types/offer";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type SearchOffersRequestQuery = {
  page?: number;
  size?: number;
  sortBy?: Sorter[];
};
type SearchOffersRequestBody = {
  type?: "ask" | "bid";
  amount?: number | [number, number];
  meansOfPayment?: MeansOfPayment;
  maxPremium?: number;
  minReputation?: number;
};
type SearchOffersResponseBody = {
  offers: (BuyOffer | SellOffer)[];
  total: number;
  remaining: number;
};
type SearchOffersErrorResponseBody = APIError<null>;

type Props = RequestProps & SearchOffersRequestQuery & SearchOffersRequestBody;

export const searchOffers =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    signal,
    type,
    amount,
    meansOfPayment,
    maxPremium,
    minReputation,
    page = 0,
    size = 21,
    sortBy = ["bestReputation"],
  }: Props) => {
    const requestBody = {
      type,
      amount,
      meansOfPayment,
      maxPremium,
      minReputation,
    };
    const response = await helpers.fetch(
      `${url}/v1/offer/search?page=${page}&size=${size}&sortBy=${sortBy.join(",")}`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify(requestBody),
        signal,
      },
    );

    return parseResponse<
      SearchOffersResponseBody,
      SearchOffersErrorResponseBody
    >(response);
  };
