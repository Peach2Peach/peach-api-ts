import { createTestWallet } from "../test/helpers/createTestWallet";
import { peachAccountSet } from "./peachAccountSet";

describe("peachAccountSet", () => {
  it("returns true if peach account is set on options", () => {
    expect(
      peachAccountSet({
        peachAccount: createTestWallet(),
        url: "api.peachbitcoin.com",
        uniqueId: "test",
      }),
    ).toBeTruthy();
  });
  it("returns true if peach account is not set on options", () => {
    expect(
      peachAccountSet({
        url: "api.peachbitcoin.com",
        uniqueId: "test",
        peachAccount: null,
      }),
    ).toBeFalsy();
  });
});
