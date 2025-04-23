import { MatchFilter } from "./api/offerAPI";
import { BitcoinEvent } from "./events";
import { Pricebook } from "./global";
import { GiftCardCountry, MeansOfPayment, PaymentMethod } from "./payment";
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
  | "createEscrow"
  | "fundEscrow"
  | "waitingForFunding"
  | "fundingExpired"
  | "fundingAmountDifferent"
  | "hasMatchesAvailable"
  | "hasTradeRequests"
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

export type OfferPaymentData = Partial<
  Record<
    PaymentMethod,
    {
      hashes: string[];
      hash?: string;
      country?: GiftCardCountry | BitcoinEvent["country"];
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

type EscrowType = "bitcoin" | "liquid";

export type BuyOfferSummary = {
  id: string;
  type: "bid";
  escrowType: EscrowType;
  newTradeId?: string;
  lastModified: Date;
  creationDate: Date;
  amount: [number, number];
  matches: string[];
  tradeStatus: TradeStatus;
};
export type SellOfferSummary = {
  id: string;
  type: "ask";
  escrowType: EscrowType;
  newTradeId?: string;
  lastModified: Date;
  creationDate: Date;
  amount: number;
  matches: string[];
  prices?: Pricebook;
  premium: number;
  tradeStatus: TradeStatus;
  txId?: string;
  fundingTxId: string;
  refunded: boolean;
};

export type BuySorter = "highestAmount" | "lowestPremium" | "bestReputation";
export type SellSorter = "highestPrice" | "bestReputation";

export type OfferSummary = BuyOfferSummary | SellOfferSummary;

export type Sorter = BuySorter | SellSorter;

export type InstantTradeCriteria = {
  minReputation: number;
  minTrades: number;
  badges: Medal[];
};
