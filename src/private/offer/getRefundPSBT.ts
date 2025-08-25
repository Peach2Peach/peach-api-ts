import {
  GetRefundPSBTErrorResponseBody,
  GetRefundPSBTRequestBody,
  GetRefundPSBTRequestParams,
  GetRefundPSBTRequestQuery,
  GetRefundPSBTResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetRefundPSBTRequestParams &
  GetRefundPSBTRequestQuery &
  GetRefundPSBTRequestBody;

export const getRefundPSBT =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await helpers.fetch(
      `${url}/v1/offer/${offerId}/refundPSBT`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<
      GetRefundPSBTResponseBody,
      GetRefundPSBTErrorResponseBody
    >(response);
  };
