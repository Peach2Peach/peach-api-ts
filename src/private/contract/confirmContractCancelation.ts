import {
  ConfirmCancelationRequestErrorResponseBody,
  ConfirmCancelationRequestRequestBody,
  ConfirmCancelationRequestRequestParams,
  ConfirmCancelationRequestRequestQuery,
  ConfirmCancelationRequestResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  ConfirmCancelationRequestRequestParams &
  ConfirmCancelationRequestRequestQuery &
  ConfirmCancelationRequestRequestBody;

export const confirmContractCancelation =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await helpers.fetch(
      `${url}/v1/contract/${contractId}/cancel/confirm`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        signal,
      },
    );

    return parseResponse<
      ConfirmCancelationRequestResponseBody,
      ConfirmCancelationRequestErrorResponseBody
    >(response);
  };
