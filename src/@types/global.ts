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
  | "AED"
  | "ARS"
  | "AUD"
  | "BGN"
  | "BOB"
  | "BRL"
  | "BRL"
  | "BTC"
  | "CAD"
  | "CDF"
  | "CHF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CRC"
  | "CUP"
  | "CZK"
  | "DKK"
  | "DOP"
  | "EGP"
  | "EUR"
  | "GBP"
  | "GHS"
  | "GTQ"
  | "HNL"
  | "HUF"
  | "IDR"
  | "ILS"
  | "INR"
  | "ISK"
  | "JPY"
  | "KES"
  | "KZT"
  | "MAD"
  | "MXN"
  | "MYR"
  | "NGN"
  | "NOK"
  | "NZD"
  | "PAB"
  | "PEN"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "RON"
  | "RSD"
  | "SAR"
  | "SAT"
  | "SEK"
  | "SGD"
  | "TRY"
  | "TZS"
  | "UAH"
  | "USD"
  | "USD"
  | "USDT"
  | "UYU"
  | "VEF"
  | "VES"
  | "VND"
  | "XOF"
  | "ZAR";
export type Pricebook = {
  [key in Currency]?: number;
};

export type Country =
  | "DE"
  | "FR"
  | "IT"
  | "ES"
  | "NL"
  | "UK"
  | "SE"
  | "FI"
  | "BE"
  | "LV";
