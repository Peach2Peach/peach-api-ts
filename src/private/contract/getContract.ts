import {
  GetContractErrorResponseBody,
  GetContractRequestBody,
  GetContractRequestParams,
  GetContractRequestQuery,
  GetContractResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetContractRequestParams &
  GetContractRequestQuery &
  GetContractRequestBody;

export const getContract =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await helpers.fetch(`${url}/v1/contract/${contractId}`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<GetContractResponseBody, GetContractErrorResponseBody>(
      response,
    );
  };
