import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type SubmitDesktopConnectionDataParams = {};
export type SubmitDesktopConnectionDataQuery = {};
export type SubmitDesktopConnectionDataBody = {
  encryptedData: string;
  encryptedDataSignature:string;
  validationPasswordEncrypted: string;
  validationPasswordSignature:string
  id: string;
};

type Props = RequestProps &
  SubmitDesktopConnectionDataParams &
  SubmitDesktopConnectionDataQuery &
  SubmitDesktopConnectionDataBody;

export const submitDesktopConnectionData =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ id, encryptedData, encryptedDataSignature, validationPasswordEncrypted,validationPasswordSignature }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/desktopConnection`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        encryptedData,
        encryptedDataSignature,
        validationPasswordEncrypted,
        validationPasswordSignature,
        id,
      }),
    });

    return parseResponse<
      {
        success: boolean;
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
