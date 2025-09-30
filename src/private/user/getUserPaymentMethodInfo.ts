import {
  GetUserPaymentMethodInfoErrorResponseBody,
  GetUserPaymentMethodInfoRequestBody,
  GetUserPaymentMethodInfoRequestParams,
  GetUserPaymentMethodInfoRequestQuery,
  GetUserPaymentMethodInfoResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetUserPaymentMethodInfoRequestParams &
  GetUserPaymentMethodInfoRequestQuery &
  GetUserPaymentMethodInfoRequestBody;

export const getUserPaymentMethodInfo =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await helpers.fetch(`${url}/v1/user/me/paymentMethods`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<
      GetUserPaymentMethodInfoResponseBody,
      GetUserPaymentMethodInfoErrorResponseBody
    >(response);
  };
