import { APIError } from "../../@types/global";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  meansOfPayment?: MeansOfPayment;
  amount?: number;
  minPremium?: number;
};

export const getBuyOfferSummaryIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ meansOfPayment, amount, minPremium }: Props = {}) => {
    const response = await fetch(`${url}/v1/offer/buy/summaryIds`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        meansOfPayment,
        amount,
        minPremium,
      }),
    });

    return parseResponse<string[], APIError<"INTERNAL_SERVER_ERROR">>(response);
  };
