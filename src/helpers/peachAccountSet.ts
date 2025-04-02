import { BIP32Interface } from "bip32";
import { PeachAPIOptions } from "../types";

export const peachAccountSet = (
  options: PeachAPIOptions
): options is PeachAPIOptions & { peachAccount: BIP32Interface } =>
  !!options.peachAccount;
