import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type SetEncryptedPaymentDataOnSelfUserParams = {};
export type SetEncryptedPaymentDataOnSelfUserQuery = {};
export type SetEncryptedPaymentDataOnSelfUserBody = {
  encryptedPaymentData: string,
  encryptedPaymentDataSignature: string

};

type Props = RequestProps &
  SetEncryptedPaymentDataOnSelfUserParams &
  SetEncryptedPaymentDataOnSelfUserQuery &
  SetEncryptedPaymentDataOnSelfUserBody;

export const setEncryptedPaymentDataOnSelfUser69 =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ encryptedPaymentData, encryptedPaymentDataSignature }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/encryptedPaymentData`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        encryptedPaymentData,
        encryptedPaymentDataSignature
      }),
    });

    return parseResponse<
      {
        success: boolean;
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
