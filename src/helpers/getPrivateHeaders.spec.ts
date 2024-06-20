import { getPrivateHeaders } from "./getPrivateHeaders";

describe("getPrivateHeaders", () => {
  const url = "url";
  const authtoken = "authtoken";
  const userAgent = "userAgent";

  it("should return private headers", () => {
    const result = getPrivateHeaders(url, authtoken);
    expect(result).toStrictEqual({
      Origin: url,
      Referer: url,
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": undefined,
      Authorization: authtoken,
    });
  });
  it("should return private headers with user agent", () => {
    const result = getPrivateHeaders(url, authtoken, userAgent);
    expect(result).toStrictEqual({
      Origin: url,
      Referer: url,
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": userAgent,
      Authorization: authtoken,
    });
  });
});
