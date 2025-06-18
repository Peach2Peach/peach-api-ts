import { APIError, Pricebook } from "../../@types/global";
import { FundingStatus } from "../../@types/offer";
import { MeansOfPayment } from "../../@types/payment";
import { Medal, PublicUser } from "../../@types/user";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };
type Res = {
  id: string;
  type: "bid" | "ask";
  user: PublicUser;
  amount: number | [number, number];
  premium?: number;
  prices?: Pricebook;
  meansOfPayment: MeansOfPayment;
  fundingStatus?: FundingStatus["status"];
  instantTradeCriteria: {
    minReputation: number;
    badges: Medal[];
    minTrades: number;
  } | null;
};
type ResponseError = APIError<"NOT_FOUND">;

export const getPublicOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}`, {
      headers: helpers.getPublicHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<Res, ResponseError>(response);
  };
