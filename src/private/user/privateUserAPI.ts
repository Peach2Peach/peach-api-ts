import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { auth } from "./auth";
import { blockUser } from "./blockUser";
import { deletePaymentHash } from "./deletePaymentHash";
import { enableTransactionBatching } from "./enableBatching";
import { getSelfUser } from "./getSelfUser";
import { getTradingLimit } from "./getTradingLimit";
import { getUserPaymentMethodInfo } from "./getUserPaymentMethodInfo";
import { getUserStatus } from "./getUserStatus";
import { logoutUser } from "./logoutUser";
import { redeemNoPeachFees } from "./redeemNoPeachFees";
import { redeemReferralCode } from "./redeemReferralCode";
import { register } from "./register";
import { submitUserCryptoLevel } from "./submitUserCryptoLevel";
import { sumbitUserSource } from "./submitUserSource";
import { unblockUser } from "./unblockUser";
import { updateUser } from "./updateUser";

export const privateUserAPI = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers,
) => ({
  auth: auth(options, helpers),
  blockUser: blockUser(options, helpers),
  deletePaymentHash: deletePaymentHash(options, helpers),
  enableTransactionBatching: enableTransactionBatching(options, helpers),
  getSelfUser: getSelfUser(options, helpers),
  getTradingLimit: getTradingLimit(options, helpers),
  getUserPaymentMethodInfo: getUserPaymentMethodInfo(options, helpers),
  getUserStatus: getUserStatus(options, helpers),
  logoutUser: logoutUser(options, helpers),
  redeemNoPeachFees: redeemNoPeachFees(options, helpers),
  redeemReferralCode: redeemReferralCode(options, helpers),
  register: register(options, helpers),
  submitUserSource: sumbitUserSource(options, helpers),
  submitUserCryptoLevel: submitUserCryptoLevel(options, helpers),
  unblockUser: unblockUser(options, helpers),
  updateUser: updateUser(options, helpers),
});
