import { PeachAPIHelpers, PeachAPIOptions } from "../../types";
import { getInfo } from "./getInfo";
import { getNews } from "./getNews";
import { getPaymentMethodInfo } from "./getPaymentMethodInfo";
import { getPaymentMethodsInfo } from "./getPaymentMethodsInfo";
import { getReferralRewardsInfo } from "./getReferralRewardsInfo";
import { getStatus } from "./getStatus";
import { getVersion } from "./getVersion";

export const publicSystemAPI = (
  options: PeachAPIOptions,
  helpers: PeachAPIHelpers
) => ({
  getInfo: getInfo(options, helpers),
  getVersion: getVersion(options, helpers),
  getPaymentMethodInfo: getPaymentMethodInfo(options, helpers),
  getPaymentMethodsInfo: getPaymentMethodsInfo(options, helpers),
  getStatus: getStatus(options, helpers),
  getNews: getNews(options, helpers),
  getReferralRewardsInfo: getReferralRewardsInfo(options, helpers),
});
