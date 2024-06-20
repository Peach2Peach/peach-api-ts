import {
  ExtendPaymentTimerErrorResponseBody,
  ExtendPaymentTimerRequestBody,
  ExtendPaymentTimerRequestParams,
  ExtendPaymentTimerRequestQuery,
  ExtendPaymentTimerResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  ExtendPaymentTimerRequestParams &
  ExtendPaymentTimerRequestQuery &
  ExtendPaymentTimerRequestBody;

export const extendPaymentTimer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/contract/${contractId}/extendTime`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "PATCH",
        signal,
      },
    );

    return parseResponse<
      ExtendPaymentTimerResponseBody,
      ExtendPaymentTimerErrorResponseBody
    >(response);
  };
