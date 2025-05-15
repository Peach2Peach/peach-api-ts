import { APIError } from "../../@types/global";
import { SellSorter } from "../../@types/offer";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  meansOfPayment?: MeansOfPayment;
  amount?: number;
  minPremium?: number;
  sortBy?: SellSorter;
  matchSellOfferId?: string;
};

export const getBuyOfferSummaryIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    meansOfPayment,
    amount,
    minPremium,
    sortBy,
    matchSellOfferId,
  }: Props = {}) => {
    const response = await fetch(`${url}/v1/offer/buy/summaryIds`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        meansOfPayment,
        amount,
        minPremium,
        sortBy,
        matchSellOfferId,
      }),
    });

    return parseResponse<string[], APIError<"INTERNAL_SERVER_ERROR">>(response);
  };
