import { getAuthenticationChallenge } from "./getAuthenticationChallenge";

const now = new Date("2022-02-14T12:00:00.000Z");
jest.useFakeTimers({ now });

describe("getAuthenticationChallenge", () => {
  it("should return correct auth challenge", () => {
    expect(getAuthenticationChallenge()).toBe(
      "Peach Registration 1644840000000",
    );
  });
  it("should return correct auth challenge with client server time difference", () => {
    expect(getAuthenticationChallenge(1000)).toBe(
      "Peach Registration 1644839999000",
    );
  });
});
