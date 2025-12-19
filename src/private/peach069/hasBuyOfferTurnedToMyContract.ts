import { Contract } from "../../@types/contract";
import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type HasBuyOfferTurnedToMyContractRequestParams = { buyOfferId: string };
export type HasBuyOfferTurnedToMyContractRequestQuery = {};
export type HasBuyOfferTurnedToMyContractRequestBody = {};

type Props = RequestProps &
  HasBuyOfferTurnedToMyContractRequestParams &
  HasBuyOfferTurnedToMyContractRequestQuery &
  HasBuyOfferTurnedToMyContractRequestBody;

export const hasBuyOfferTurnedToMyContract =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${String(buyOfferId)}/hasTurnedToMyContract`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });
    return parseResponse<
      { success: boolean; contract?: Contract },
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
