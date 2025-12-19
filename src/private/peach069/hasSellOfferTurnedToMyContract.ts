import { Contract } from "../../@types/contract";
import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type HasBuyOfferTurnedToMyContractRequestParams = {
  sellOfferId: string;
};
export type HasBuyOfferTurnedToMyContractRequestQuery = {};
export type HasBuyOfferTurnedToMyContractRequestBody = {};

type Props = RequestProps &
  HasBuyOfferTurnedToMyContractRequestParams &
  HasBuyOfferTurnedToMyContractRequestQuery &
  HasBuyOfferTurnedToMyContractRequestBody;

export const hasSellOfferTurnedToMyContract =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${String(sellOfferId)}/hasTurnedToMyContract`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });
    return parseResponse<
      { success: boolean; contract?: Contract },
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
