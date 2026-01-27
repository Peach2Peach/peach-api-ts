import {
  ConfirmPaymentBuyerRequestBody,
  ConfirmPaymentBuyerResponseBody,
  ConfirmPaymentErrorResponseBody,
  ConfirmPaymentRequestParams,
  ConfirmPaymentRequestQuery,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  ConfirmPaymentRequestParams &
  ConfirmPaymentRequestQuery &
  ConfirmPaymentBuyerRequestBody;

export const confirmPaymentBuyer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId,releaseAddress,releaseAddressMessageSignature, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/contract/${contractId}/payment/confirm`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          releaseAddress,
          releaseAddressMessageSignature,
        }),
        signal,
      },
    );

    return parseResponse<
      ConfirmPaymentBuyerResponseBody,
      ConfirmPaymentErrorResponseBody
    >(response);
  };
