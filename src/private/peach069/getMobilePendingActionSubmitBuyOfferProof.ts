import { APIError } from "../../@types/global";
import { MobilePendingActionSubmitBuyOfferProof } from "../../@types/mobilePendingAction";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetMobilePendingActionSubmitBuyOfferProofRequestParams = {
  id: string;
};

type Props = RequestProps &
  GetMobilePendingActionSubmitBuyOfferProofRequestParams;

export const getMobilePendingActionSubmitBuyOfferProof =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/submitBuyOfferProof/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      MobilePendingActionSubmitBuyOfferProof,
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
