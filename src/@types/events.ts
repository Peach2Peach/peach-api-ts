import { Country, Currency } from "./global";

export type BitcoinEvent = {
  id: string;
  featured: boolean;
  currencies: Currency[];
  country: Country;
  city: string;
  shortName: string;
  longName: string;
  url?: string;
  address?: string;
  frequency?: string;
  logo?: string; // path to the logo
};
