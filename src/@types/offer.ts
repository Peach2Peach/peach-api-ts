import { MatchFilter } from "./api/offerAPI";
import { Pricebook } from "./global";
import { MeansOfPayment, PaymentMethod } from "./payment";
import { Medal, PublicUser } from "./user";

export type FundingStatus = {
  status: "NULL" | "MEMPOOL" | "FUNDED" | "WRONG_FUNDING_AMOUNT" | "CANCELED";
  confirmations?: number;
  txIds: string[];
  vouts: number[];
  amounts: number[];
  expiry: number;
  derivationPath?: string;
};

export type TradeStatus =
  | "confirmCancelation"
  | "confirmPaymentRequired"
  | "dispute"
  | "escrowWaitingForConfirmation"
  | "fundEscrow"
  | "waitingForFunding"
  | "fundingExpired"
  | "fundingAmountDifferent"
  | "hasMatchesAvailable"
  | "offerCanceled"
  | "offerHidden"
  | "offerHiddenWithMatchesAvailable"
  | "paymentRequired"
  | "paymentTooLate"
  | "payoutPending"
  | "rateUser"
  | "refundAddressRequired"
  | "refundOrReviveRequired"
  | "refundTxSignatureRequired"
  | "releaseEscrow"
  | "searchingForPeer"
  | "tradeCanceled"
  | "tradeCompleted";

export type PaymentMethodCountry =
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
  | "CZ"
  | "DE"
  | "DK"
  | "ES"
  | "FI"
  | "FR"
  | "GB"
  | "GR"
  | "HR"
  | "HU"
  | "IN"
  | "ISK"
  | "IT"
  | "JP"
  | "KE"
  | "LV"
  | "ME"
  | "MK"
  | "MT"
  | "NG"
  | "NL"
  | "NO"
  | "PL"
  | "PT"
  | "RO"
  | "RS"
  | "SE"
  | "SI"
  | "TH"
  | "TR"
  | "UK"
  | "US"
  | "ZA";

export type OfferPaymentData = Partial<
  Record<
    PaymentMethod,
    {
      hashes: string[];
      hash?: string;
      country?: PaymentMethodCountry;
      encrypted?: string;
      signature?: string;
    }
  >
>;

export type Offer = {
  type: "ask" | "bid";
  meansOfPayment: MeansOfPayment;
  paymentData: OfferPaymentData;

  id: string;
  creationDate: Date;
  lastModified: Date;
  publishingDate?: Date;
  online: boolean;

  user: PublicUser;
  matches: string[];
  doubleMatched: boolean;
  contractId?: string;
  escrowFee: number;
  freeTrade: boolean;

  tradeStatus: TradeStatus;
};

export type SellOffer = Offer & {
  type: "ask";
  amount: number;
  premium: number;
  returnAddress: string;
  funding: FundingStatus;
  multi?: number;

  escrow?: string;
  escrowNotifiedUser?: boolean;
  tx?: string;
  refundTx?: string;
  releaseTx?: string;
  txId?: string;
  refunded: boolean;
  released: boolean;
  fundingAmountDifferent: boolean;
  publicKey: string;

  oldOfferId?: string;
  newOfferId?: string;
  prices?: Pricebook;
};

export type BuyOffer = Offer & {
  type: "bid";
  releaseAddress: string;
  amount: [number, number];
  message: string;
  messageSignature?: string;
} & Required<MatchFilter>;

export type OfferSummary = {
  id: string;
  type: "bid" | "ask";
  creationDate: Date;
  lastModified: Date;
  amount: number | [number, number];
  matches: string[];
  prices?: Pricebook;
  tradeStatus: TradeStatus;
  contractId?: string;
  newTradeId?: string;
  txId?: string;
  fundingTxId?: string;
  refunded?: boolean;
};

type BuySorter = "highestAmount" | "lowestPremium" | "bestReputation";
type SellSorter = "highestPrice" | "bestReputation";

export type Sorter = BuySorter | SellSorter;

export type InstantTradeCriteria = {
  minReputation: number;
  minTrades: number;
  badges: Medal[];
};
