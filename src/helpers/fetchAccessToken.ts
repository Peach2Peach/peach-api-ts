import { BIP32Interface } from "bip32";
import { crypto } from "bitcoinjs-lib";
import { auth } from "../private/user/auth";
import { PeachAPIOptions, PublicPeachAPIHelpers } from "../types";

const getAbortWithTimeout = (timeout: number) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  return {
    signal: controller.signal,
    cancel: () => clearTimeout(timeoutId),
  };
};

export const fetchAccessToken =
  (
    options: PeachAPIOptions & { peachAccount: BIP32Interface },
    helpers: PublicPeachAPIHelpers,
  ) =>
  async (message: string) => {
    const abortSignal = getAbortWithTimeout(10 * 1000);

    const { result, error } = await auth(
      options,
      helpers,
    )({
      publicKey: options.peachAccount.publicKey.toString("hex"),
      message,
      signature: options.peachAccount
        .sign(crypto.sha256(Buffer.from(message)))
        .toString("hex"),
      uniqueId: options.uniqueId,
      signal: abortSignal.signal,
      cancelAbortSignal: abortSignal.cancel,
    });

    if (!result) return { error, accessToken: undefined };

    return {
      accessToken: {
        accessToken: `Basic ${Buffer.from(result.accessToken)}`,
        expiry: result.expiry,
      },
      error: undefined,
    };
  };
