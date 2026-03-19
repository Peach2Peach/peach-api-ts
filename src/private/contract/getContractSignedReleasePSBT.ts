import {
    GetContractErrorResponseBody,
    GetContractRequestBody,
    GetContractRequestParams,
    GetContractRequestQuery,
    GetContractSignedReleasePSBTResponseBody
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetContractRequestParams &
  GetContractRequestQuery &
  GetContractRequestBody;

export const getContractSignedReleasePSBT =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/contract/${contractId}/signedReleasePSBT`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<GetContractSignedReleasePSBTResponseBody, GetContractErrorResponseBody>(
      response,
    );
  };
