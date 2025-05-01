import { NewUser, User } from "./user";

export type AccessToken = {
  expiry: number;
  accessToken: string;
  user: User | NewUser;
};

export type APISuccess = {
  success: true;
};

export type APIError<E> = {
  error:
    | E
    | "INTERNAL_SERVER_ERROR"
    | "FORM_INVALID"
    | "UNAUTHORIZED"
    | "TOO_MANY_REQUESTS";
  message?: string;
  details?: any;
};

export type Currency =
  | "BTC"
  | "SAT"
  | "USD"
  | "EUR"
  | "CHF"
  | "GBP"
  | "SEK"
  | "DKK"
  | "BGN"
  | "CZK"
  | "HUF"
  | "PLN"
  | "RON"
  | "ISK"
  | "NOK"
  | "TRY"
  | "USDT"
  | "ARS"
  | "COP"
  | "PEN"
  | "MXN"
  | "CLP"
  | "XOF"
  | "NGN"
  | "CDF"
  | "CRC"
  | "BRL"
  | "GTQ"
  | "ZAR"
  | "KES"
  | "GHS"
  | "BRL"
  | "AUD"
  | "ILS"
  | "RSD"
  | "CAD"
  | "KZT"
  | "INR"
  | "SGD"
  | "SAR"
  | "PHP"
  | "AED"
  | "EGP"
  | "JPY"
  | "NZD"
  | "MAD"
  | "UAH"
  | "UYU"
  | "IDR"
  | "MYR"
  | "CNY"
  | "PKR"
  | "VND"
  | "RUB"
  | "BOB"
  | "CLF"
  | "CUC"
  | "CUP"
  | "DOP"
  | "HNL"
  | "PAB"
  | "PYG"
  | "VEF"
  | "VES"
  | "SRD"
  | "TZS";

export type Pricebook = {
  [key in Currency]?: number;
};
