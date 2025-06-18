import { APIError } from "../../@types/global";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };

type Res = {
  amount: [number, number];
  meansOfPayment: MeansOfPayment;
  maxPremium: number | undefined;
  minReputation: number | undefined;
};

export const getBuyOfferPreferences =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/buy/preferences`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<
      Res,
      APIError<"NOT_FOUND" | "AUTHENTICATION_FAILED" | "UNAUTHORIZED">
    >(response);
  };
