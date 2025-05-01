import { Currency } from "./global";

export type BitcoinEvent = {
  id: string;
  featured: boolean;
  currencies: Currency[];
  country:
    | "AD"
    | "AT"
    | "BA"
    | "BE"
    | "BG"
    | "BR"
    | "CD"
    | "CH"
    | "CI"
    | "CY"
    | "CZ"
    | "DE"
    | "ES"
    | "FI"
    | "FR"
    | "GB"
    | "GH"
    | "GR"
    | "HN"
    | "HR"
    | "IT"
    | "KE"
    | "ME"
    | "MK"
    | "MT"
    | "NG"
    | "NL"
    | "PL"
    | "PT"
    | "RS"
    | "SI"
    | "UK"
    | "ZA";
  city: string;
  shortName: string;
  longName: string;
  url?: string;
  address?: string;
  frequency?: string;
  logo?: string; // path to the logo
};
