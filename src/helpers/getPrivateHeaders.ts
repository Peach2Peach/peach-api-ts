import { PrivateHeaders } from "../types";
import { getPublicHeaders } from "./getPublicHeaders";

export const getPrivateHeaders = (
  url: string,
  authToken: string,
  buildNumber: string,
  userAgent?: string,
): PrivateHeaders => ({
  ...getPublicHeaders(url,buildNumber, userAgent),
  Authorization: authToken,
});
