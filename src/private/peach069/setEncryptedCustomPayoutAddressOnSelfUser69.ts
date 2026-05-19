import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type SetEncryptedCustomPayoutAddressOnSelfUserParams = {};
export type SetEncryptedCustomPayoutAddressOnSelfUserQuery = {};
export type SetEncryptedCustomPayoutAddressOnSelfUserBody = {
  encryptedCustomPayoutAddress: string,
  encryptedCustomPayoutAddressSignature: string

};

type Props = RequestProps &
  SetEncryptedCustomPayoutAddressOnSelfUserParams &
  SetEncryptedCustomPayoutAddressOnSelfUserQuery &
  SetEncryptedCustomPayoutAddressOnSelfUserBody;

export const setEncryptedCustomPayoutAddressOnSelfUser69 =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ encryptedCustomPayoutAddress, encryptedCustomPayoutAddressSignature }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/encryptedCustomPayoutAddress`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        encryptedCustomPayoutAddress,
        encryptedCustomPayoutAddressSignature
      }),
    });

    return parseResponse<
      {
        success: boolean;
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
