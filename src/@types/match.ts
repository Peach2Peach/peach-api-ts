import { Contract } from "./contract";
import { Currency, Pricebook } from "./global";
import { OfferPaymentData } from "./offer";
import { MeansOfPayment, PaymentMethod } from "./payment";
import { PublicUser, TradingLimit } from "./user";

export type MatchUnavailableReasons = {
  exceedsLimit: (keyof TradingLimit)[];
};

export type Match = {
  creationDate: Date;
  lastModified: Date;
  user: PublicUser;
  offerId: string;
  amount: number;
  escrow?: string;
  prices: Pricebook;
  matchedPrice: number | null;
  premium: number;
  meansOfPayment: MeansOfPayment;
  paymentData?: OfferPaymentData;
  selectedCurrency?: Currency;
  selectedPaymentMethod?: PaymentMethod;
  symmetricKeyEncrypted: string;
  symmetricKeySignature: string;
  matched: boolean;
  unavailable: MatchUnavailableReasons;
  instantTrade: boolean;
};

export type SellOfferSummary = {
  offerId: string;
  amount: number;
  requestedPrice: number | null;
  premium: number;
  selectedCurrency?: Currency;
  tradeRequested: boolean;
  canInstantTrade: boolean;
  user: PublicUser;
  online: boolean;
  contract?: Contract;
};

export type BuyOfferSummary = {
  offerId: string;
  amount: [number, number];
  requestedPrice: number | null;
  premium: number;
  selectedCurrency?: Currency;
  tradeRequested: boolean;
  canInstantTrade: boolean;
  user: PublicUser;
  online: boolean;
  contract?: Contract;
};
