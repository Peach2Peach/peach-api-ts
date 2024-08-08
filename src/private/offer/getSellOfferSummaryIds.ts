
import { APIError } from "../../@types/global";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  meansOfPayment?: MeansOfPayment;
  amount?: [number, number];
  maxPremium?: number;
}


export const getSellOfferSummaryIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ meansOfPayment, amount, maxPremium }: Props = {}) => {
    const response = await fetch(`${url}/v1/offer/sell/summaryIds`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        meansOfPayment,
        amount,
        maxPremium,
      }),
    });


    return parseResponse<
      string[],
      APIError<"INTERNAL_SERVER_ERROR">
    >(response);
  };
