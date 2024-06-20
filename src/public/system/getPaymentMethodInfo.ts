import { APIError } from "../../@types/global";
import { PaymentMethod, PaymentMethodInfo } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & {
  paymentMethod: PaymentMethod;
};

export const getPaymentMethodInfo =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal, paymentMethod }: Props) => {
    const response = await fetch(
      `${url}/v1/info/paymentMethods/${paymentMethod}`,
      {
        headers: {
          ...helpers.getPublicHeaders(url),
          "Cache-Control": "no-cache",
        },
        method: "GET",
        signal,
      },
    );

    return parseResponse<PaymentMethodInfo, APIError<null>>(response);
  };
