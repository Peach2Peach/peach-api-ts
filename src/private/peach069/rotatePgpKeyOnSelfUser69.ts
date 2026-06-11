import { APIError } from "../../@types/global";
import { SubmittedEncryptedBlob } from "../../@types/pgpKeyRotation";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type RotatePgpKeyOnSelfUserBody = {
  pgpPublicKey: string;
  signature: string;
  message: string;
  pgpSignature: string;
  generatedAt: number;
  blobs: SubmittedEncryptedBlob[];
};

type Props = RequestProps & RotatePgpKeyOnSelfUserBody;

export const rotatePgpKeyOnSelfUser69 =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    pgpPublicKey,
    signature,
    message,
    pgpSignature,
    generatedAt,
    blobs,
  }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/rotatePgpKey`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        pgpPublicKey,
        signature,
        message,
        pgpSignature,
        generatedAt,
        blobs,
      }),
    });

    return parseResponse<
      {
        success: boolean;
      },
      APIError<
        | "UNAUTHORIZED"
        | "ALREADY_MIGRATED"
        | "INCOMPLETE_ROTATION"
        | "INVALID_SIGNATURE"
        | "INVALID_PGP_SIGNATURE"
      >
    >(response);
  };
