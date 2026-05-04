import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PostMobilePendingActionRefundRequestParams = {id:string};
export type PostMobilePendingActionRefundRequestQuery = {};
export type PostMobilePendingActionRefundRequestBody = {
   signature: string;
  
};

type Props = RequestProps &
  PostMobilePendingActionRefundRequestParams &
  PostMobilePendingActionRefundRequestQuery &
  PostMobilePendingActionRefundRequestBody;

export const postMobilePendingActionRefund =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({id, signature}: Props) => {
    const endpointUrl = `${url}/v069/selfUser/pendingAction/refund/${id}`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
          signature,
        }),

    });

    return parseResponse<
      {success:boolean},
      APIError<"UNAUTHORIZED">
    >(response);
  };
