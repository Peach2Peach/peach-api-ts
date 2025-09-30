import { PublicHeaders } from "../types";

export const getPublicHeaders = (
  url: string,
  buildNumber:string,
  userAgent?: string,
): PublicHeaders => ({
  Origin: url,
  Referer: url,
  Accept: "application/json",
  "Content-Type": "application/json",
  "User-Agent": userAgent,
  buildNumber
});
