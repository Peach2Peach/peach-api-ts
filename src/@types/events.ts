import { Currency } from "./global";

export type BitcoinEvent = {
  id: string;
  featured: boolean;
  currencies: Currency[];
  country:
    | "AD"
    | "AE"
    | "AT"
    | "BA"
    | "BE"
    | "BG"
    | "BR"
    | "CD"
    | "CH"
    | "CI"
    | "CO"
    | "CY"
    | "DE"
    | "ES"
    | "FR"
    | "GB"
    | "GR"
    | "HR"
    | "IN"
    | "IT"
    | "JP"
    | "KE"
    | "LV"
    | "ME"
    | "MK"
    | "MT"
    | "NG"
    | "NL"
    | "PL"
    | "PT"
    | "RS"
    | "SI"
    | "TH"
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
