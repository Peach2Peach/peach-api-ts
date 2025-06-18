import { APIError } from "../../@types/global";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };
type Res = {
  amount: number;
  premium: number;
  meansOfPayment: MeansOfPayment;
};

export const getSellOfferPreferences =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/sell/preferences`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<
      Res,
      APIError<"NOT_FOUND" | "AUTHENTICATION_FAILED" | "UNAUTHORIZED">
    >(response);
  };
