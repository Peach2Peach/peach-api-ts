import { APIError, Pricebook } from "../../@types/global";
import { FundingStatus } from "../../@types/offer";
import { MeansOfPayment } from "../../@types/payment";
import { PublicUser } from "../../@types/user";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };
export type GetOfferResponseBody = {
  id: string;
  type: "bid" | "ask";
  user: PublicUser;
  amount: number | [number, number];
  premium?: number;
  prices?: Pricebook;
  meansOfPayment: MeansOfPayment;
  escrow?: string;
  fundingStatus?: FundingStatus["status"];
};
type ResponseError = APIError<"NOT_FOUND">;

export const getOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}`, {
      headers: helpers.getPublicHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<GetOfferResponseBody, ResponseError>(response);
  };
