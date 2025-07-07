import { MatchFilter } from "./api/offerAPI";
import { Pricebook } from "./global";
import { MeansOfPayment, PaymentData, PaymentMethod } from "./payment";
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
  | "tradeCompleted"
  | "fundingExpired"
  | "createEscrow";

export type PaymentMethodCountry =
  | "BG"
  | "CZ"
  | "DK"
  | "HU"
  | "NO"
  | "PL"
  | "RO"
  | "TR"
  | "NG"
  | "DE"
  | "CH"
  | "ISK"
  | "SE"
  | "IT"
  | "ES"
  | "FR"
  | "NL"
  | "UK"
  | "BE"
  | "PT"
  | "GR"
  | "UK"
  | "GB"
  | "CY"
  | "SI"
  | "LV"
  | "US"
  | "FI";

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


export type OfferSummary = BuyOfferSummary | SellOfferSummary;

type BuySorter = "highestAmount" | "lowestPremium" | "bestReputation";
type SellSorter = "highestPrice" | "bestReputation";

export type Sorter = BuySorter | SellSorter;

export type InstantTradeCriteria = {
  minReputation: number;
  minTrades: number;
  badges: Medal[];
};


export type BuyOffer69 = {
  id: number;
  amountSats:number;
  userId:string;
  status:string;
  releaseAddress:string;
  releaseAddressMessageSignature: string;
  minReputation?:number;
  premium:number;
  freeTrade:boolean;
  paymentData: PaymentData;
  meansOfPayment:MeansOfPayment;
  creationDate: Date;  
};

export type BuyOffer69TradeRequest ={
  id   :number;
  buyOfferId           :number;
  userId                :string;
  paymentMethod         :string;
  paymentDataHashed     :string;
  paymentDataEncrypted   :string;
  paymentDataSignature  :string;
  symmetricKeyEncrypted  :string;
  symmetricKeySignature  :string;
  maxMiningFeeRate       :number;
  currency               :string;
  price                 :number;
}