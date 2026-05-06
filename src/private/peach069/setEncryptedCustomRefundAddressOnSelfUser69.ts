import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type SetEncryptedCustomRefundAddressOnSelfUserParams = {};
export type SetEncryptedCustomRefundAddressOnSelfUserQuery = {};
export type SetEncryptedCustomRefundAddressOnSelfUserBody = {
  encryptedCustomRefundAddress: string,
  encryptedCustomRefundAddressSignature: string

};

type Props = RequestProps &
  SetEncryptedCustomRefundAddressOnSelfUserParams &
  SetEncryptedCustomRefundAddressOnSelfUserQuery &
  SetEncryptedCustomRefundAddressOnSelfUserBody;

export const setEncryptedCustomRefundAddressOnSelfUser69 =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ encryptedCustomRefundAddress, encryptedCustomRefundAddressSignature }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/encryptedCustomRefundAddress`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        encryptedCustomRefundAddress,
        encryptedCustomRefundAddressSignature
      }),
    });

    return parseResponse<
      {
        success: boolean;
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
