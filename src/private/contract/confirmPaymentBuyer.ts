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
  async ({ contractId, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/contract/${contractId}/payment/confirm`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        signal,
      }
    );

    return parseResponse<
      ConfirmPaymentBuyerResponseBody,
      ConfirmPaymentErrorResponseBody
    >(response);
  };
