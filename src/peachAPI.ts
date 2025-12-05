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

  public async myFetch(
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> {
    if (this.authToken) {
      try {
        const decodedJwt = decodeJwt(this.authToken.accessToken);
        const currentMoment = new Date().getTime();
        if (decodedJwt.exp && currentMoment >= (decodedJwt.exp - 60) * 1000) {
          await this.authenticate();
        }
      } catch (err) {
        await this.authenticate();
      }
    }

    let response = await fetch(input, init);

    if (response.status === 401) {
      const cloned = response.clone();
      const body = await cloned.text();
      if (!body.includes("AUTHENTICATION_FAILED")) {
        return response;
      }

      const authResult = await this.authenticate();

      if (authResult?.authToken) {
        const url = typeof input === "string" ? input : input.toString();
        const newInit: RequestInit = {
          ...init,
          headers: {
            ...(init?.headers || {}),
            ...this.helpers.getPrivateHeaders(url),
          },
        };

        response = await fetch(input, newInit);
      }
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
      fetch: this.myFetch.bind(this),
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
    if (this.isPerformingAuthentication) {
      return undefined;
    }
    this.isPerformingAuthentication = true;
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
