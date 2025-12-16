import { BIP32Interface } from "bip32";
import { decodeJwt } from "jose";
import { calculateClientServerTimeDifference } from "./helpers/calculateClientServerTimeDifference";
import { fetchAccessToken } from "./helpers/fetchAccessToken";
import { getAuthenticationChallenge } from "./helpers/getAuthenticationChallenge";
import { getPrivateHeaders } from "./helpers/getPrivateHeaders";
import { getPublicHeaders } from "./helpers/getPublicHeaders";
import { peachAccountSet } from "./helpers/peachAccountSet";
import { peachAPIPrivate } from "./private/peachAPIPrivate";
import { peachAPIPublic } from "./public/peachAPIPublic";
import { PeachAPIOptions, PublicPeachAPIHelpers } from "./types";
export class PeachAPI {
  private apiOptions: PeachAPIOptions;

  private authToken?: { accessToken: string; expiry: number };

  private clientServerTimeDifference = 0;

  private publicHelpers: PublicPeachAPIHelpers;

  private isPerformingAuthentication: boolean;

  constructor(options: PeachAPIOptions) {
    this.apiOptions = options;

    this.publicHelpers = {
      getPublicHeaders: (url: string) =>
        getPublicHeaders(url, options.buildNumber, options.userAgent),
    };
    this.isPerformingAuthentication = false;

    if (options?.peachAccount) {
      this.authenticate();
    }
  }

  public deleteAuthToken(): void {
    this.authToken = undefined;
    this.isPerformingAuthentication = false;
  }

  public async fetchWithAuth(
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> {
    const currentAuthToken = this.authToken;
    if (currentAuthToken) {
      try {
        const decodedJwt = decodeJwt(currentAuthToken.accessToken);
        const currentMoment = new Date().getTime();
        if (
          decodedJwt.exp &&
          currentMoment >= (decodedJwt.exp - 5 * 60) * 1000
        ) {
          // refresh the token 5 minutes before it expires
          await this.authenticate();
        }
      } catch (err) {
        await this.authenticate();
      }
    } else {
      await this.authenticate();
    }

    const maxAttempts = 25;
    let attempts = 0;

    while (!this.authToken && attempts < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      attempts++;
    }

    const url = typeof input === "string" ? input : input.toString();

    let newInit: RequestInit = {
      ...init,
      headers: {
        ...(init?.headers || {}),
        ...this.helpers.getPrivateHeaders(url),
      },
    };

    let response = await fetch(input, newInit);

    if (response.status === 401) {
      const cloned = response.clone();
      const body = await cloned.text();
      if (!body.includes("AUTHENTICATION_FAILED")) {
        return response;
      }

      await this.authenticate();

      attempts = 0;

      while (!this.authToken && attempts < 5) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        attempts++;
      }

      newInit = {
        ...init,
        headers: {
          ...(init?.headers || {}),
          ...this.helpers.getPrivateHeaders(url),
        },
      };

      response = await fetch(input, newInit);
    }

    return response;
  }

  private get helpers() {
    return {
      ...this.publicHelpers,
      getPrivateHeaders: (url: string) =>
        getPrivateHeaders(
          url,
          this.authToken?.accessToken || "",
          this.apiOptions.buildNumber,
          this.apiOptions.userAgent,
        ),
      fetchWithAuth: this.fetchWithAuth.bind(this),
    };
  }

  public get public() {
    return peachAPIPublic(this.apiOptions, this.helpers);
  }

  public get private() {
    return peachAPIPrivate(this.apiOptions, this.helpers);
  }

  public async adjustClientServerTimeDifference() {
    this.clientServerTimeDifference = await calculateClientServerTimeDifference(
      this.apiOptions,
      this.publicHelpers,
    );
  }

  public async authenticate() {
    if (this.isPerformingAuthentication || !peachAccountSet(this.apiOptions)) {
      return undefined;
    }
    this.isPerformingAuthentication = true;
    this.authToken = undefined;
    try {
      const message = getAuthenticationChallenge(
        this.clientServerTimeDifference,
      );
      if (peachAccountSet(this.apiOptions)) {
        const { accessToken, error } = await fetchAccessToken(
          this.apiOptions,
          this.publicHelpers,
        )(message);

        this.authToken = accessToken;
        if (!this.authToken) return { authToken: this.authToken, error };

        this.isPerformingAuthentication = false;
        return { authToken: this.authToken, error };
      }
    } catch (err) {
      console.log("Authenticate Failed with error: ", err);
    }
    this.isPerformingAuthentication = false;

    return undefined;
  }

  public setPeachAccount(peachAccount: BIP32Interface | null) {
    this.authToken = undefined;
    this.apiOptions.peachAccount = peachAccount;
    if (peachAccount) this.authenticate();
  }

  public isAuthenticated() {
    return !!this.authToken?.accessToken;
  }

  public getOptions() {
    return this.apiOptions;
  }
}
