import {
  RaiseDisputeErrorResponseBody,
  RaiseDisputeRequestBody,
  RaiseDisputeRequestParams,
  RaiseDisputeRequestQuery,
  RaiseDisputeResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  RaiseDisputeRequestParams &
  RaiseDisputeRequestQuery &
  RaiseDisputeRequestBody;

export const raiseDispute =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    contractId,
    email,
    reason,
    message,
    symmetricKeyEncrypted,
    paymentDataSellerEncrypted,
    paymentDataBuyerEncrypted,
    signal,
  }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/contract/${contractId}/dispute`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          email,
          reason,
          message,
          symmetricKeyEncrypted,
          paymentDataSellerEncrypted,
          paymentDataBuyerEncrypted,
        }),
        signal,
      },
    );

    return parseResponse<
      RaiseDisputeResponseBody,
      RaiseDisputeErrorResponseBody
    >(response);
  };
