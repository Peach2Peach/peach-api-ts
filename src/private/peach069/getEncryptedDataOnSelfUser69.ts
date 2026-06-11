import { APIError } from "../../@types/global";
import { EncryptedDataBlob } from "../../@types/pgpKeyRotation";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

export const getEncryptedDataOnSelfUser69 =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async () => {
    const endpointUrl = `${url}/v069/selfUser/encryptedData`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      {
        blobs: EncryptedDataBlob[];
        generatedAt: number;
        alreadyMigrated?: boolean;
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
