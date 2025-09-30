import {
  ConfirmPaymentErrorResponseBody,
  ConfirmPaymentRequestParams,
  ConfirmPaymentRequestQuery,
  ConfirmPaymentSellerRequestBody,
  ConfirmPaymentSellerResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  ConfirmPaymentRequestParams &
  ConfirmPaymentRequestQuery &
  ConfirmPaymentSellerRequestBody;

export const confirmPaymentSeller =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    contractId,
    releaseTransaction,
    batchReleasePsbt,
    signal,
  }: Props) => {
    const response = await helpers.fetch(
      `${url}/v1/contract/${contractId}/payment/confirm`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          releaseTransaction,
          batchReleasePsbt,
        }),
        signal,
      },
    );

    return parseResponse<
      ConfirmPaymentSellerResponseBody,
      ConfirmPaymentErrorResponseBody
    >(response);
  };
