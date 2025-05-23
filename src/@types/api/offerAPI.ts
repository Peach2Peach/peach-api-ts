import { APIError, APISuccess, Currency } from "../global";
import { Match } from "../match";
import {
  BuyOffer,
  FundingStatus,
  OfferPaymentData,
  SellOffer,
  Sorter,
} from "../offer";
import { PaymentMethod } from "../payment";
import { Message } from "./chatAPI";

export type PostTradeRequestChatRequestParams = {
  offerId: string;
  requestingUserId: string;
};
export type PostTradeRequestChatRequestQuery = {};
export type PostTradeRequestChatRequestBody = {
  message: string;
  signature: string;
};
export type PostTradeRequestChatResponseBody = APISuccess;
export type PostTradeRequestChatErrorResponseBody = APIError<"NOT_FOUND">;

export type GetTradeRequestChatRequestParams = {
  offerId: string;
  requestingUserId: string;
};
export type GetTradeRequestChatRequestQuery = { page?: number };
export type GetTradeRequestChatRequestBody = {};
export type GetTradeRequestChatResponseBody = Message[];
export type GetTradeRequestChatErrorResponseBody = APIError<"NOT_FOUND">;

export type IsAllowedToTradeRequestChatResponseBody = { result: boolean };

export type CancelOfferRequestParams = { offerId: string };
export type CancelOfferRequestQuery = {};
export type CancelOfferRequestBody = { satsPerByte?: number };
export type CancelOfferResponseBody =
  | {
      psbt: string;
      returnAddress: string;
      amount: number;
      fees: number;
      satsPerByte: number;
    }
  | APISuccess;
export type CancelOfferErrorResponseBody = APIError<
  "UNAUTHORIZED" | "TRANSACTION_INVALID" | "NOT_FOUND"
>;

export type GetRefundPSBTRequestParams = { offerId: string };
export type GetRefundPSBTRequestQuery = {};
export type GetRefundPSBTRequestBody = { satsPerByte?: number };
export type GetRefundPSBTResponseBody = {
  psbt: string;
  returnAddress: string;
  amount: number;
  fees: number;
  satsPerByte: number;
};
export type GetRefundPSBTErrorResponseBody = APIError<
  "UNAUTHORIZED" | "TRANSACTION_INVALID" | "NOT_FOUND"
>;

export type CreateEscrowRequestParams = { offerId: string };
export type CreateEscrowRequestQuery = {};
export type CreateEscrowRequestBody = { publicKey: string };
export type CreateEscrowResponseBody = {
  offerId: string;
  escrow: string;
  funding: Partial<FundingStatus>;
};
export type CreateEscrowErrorResponseBody = APIError<
  "NOT_FOUND" | "BAD_REQUEST"
>;

export type ConfirmEscrowRequestParams = { offerId: string };
export type ConfirmEscrowRequestQuery = {};
export type ConfirmEscrowRequestBody = {};
export type ConfirmEscrowResponseBody = APISuccess;
export type ConfirmEscrowErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED"
>;

export type GetMatchesRequestParams = { offerId: string };
export type GetMatchesRequestQuery = {
  page?: number;
  size?: number;
  sortBy?: Sorter[];
};
export type GetMatchesRequestBody = {};
export type GetMatchesResponseBody = {
  offerId: string;
  matches: Match[];
  totalMatches: number;
  nextPage: number;
};
export type GetMatchesErrorResponseBody = APIError<
  "NOT_FOUND" | "CONTRACT_EXISTS" | "CANCELED"
>;

export type GetOfferDetailsRequestParams = { offerId: string };
export type GetOfferDetailsRequestQuery = {};
export type GetOfferDetailsRequestBody = {};
export type GetOfferDetailsResponseBody = BuyOffer | SellOffer;
export type GetOfferDetailsErrorResponseBody = APIError<"NOT_FOUND">;

export type GetOffersRequestParams = {};
export type GetOffersRequestQuery = {};
export type GetOffersRequestBody = {};
export type GetOffersResponseBody = (BuyOffer | SellOffer)[];
export type GetOffersErrorResponseBody = APIError<null>;

export type MatchOfferRequestParams = {
  offerId: string;
};
export type MatchOfferRequestQuery = {};
export type MatchOfferRequestBody = {
  matchingOfferId: string;
  currency: Currency;
  paymentMethod: PaymentMethod;
  price?: number;
  premium?: number;
  maxMiningFeeRate?: number;
  paymentData?: OfferPaymentData;
  symmetricKeyEncrypted?: string;
  symmetricKeySignature?: string;
  paymentDataEncrypted?: string;
  paymentDataSignature?: string;
  instantTrade?: boolean;
};
export type MatchOfferResponseBody =
  | {
      success: true;
      contractId: string;
      refundTx: string;
    }
  | {
      matchedPrice: number;
    };
export type MatchOfferErrorResponseBody = APIError<
  | "NOT_FOUND"
  | "UNAUTHORIZED"
  | "CANNOT_MATCH"
  | "FORM_INVALID"
  | "CANNOT_DOUBLEMATCH"
  | "TRANSACTION_INVALID"
  | "TRADING_LIMIT_REACHED"
  | "OFFER_TAKEN"
>;

export type MatchFilter = {
  maxPremium?: number | null;
  minReputation?: number | null;
};

export type PatchOfferErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED" | "INVALID_SIGNATURE"
>;

export type PostOfferErrorResponseBody = APIError<
  | "TRADING_LIMIT_REACHED"
  | "INVALID_SIGNATURE"
  | "PAYMENT_HASH_INVALID"
  | "PGP_MISSING"
>;

export type UnmatchOfferRequestParams = { offerId: string };
export type UnmatchOfferRequestQuery = {};
export type UnmatchOfferRequestBody = { matchingOfferId: string };
export type UnmatchOfferResponseBody = APISuccess;
export type UnmatchOfferErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED"
>;

export type RepublishSellOfferRequestParams = { offerId: string };
export type RepublishSellOfferRequestQuery = {};
export type RepublishSellOfferRequestBody = {};
export type RepublishSellOfferResponseBody = { newOfferId: string };
export type RepublishSellOfferErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED"
>;

export type RefundSellOfferRequestParams = { offerId: string };
export type RefundSellOfferRequestQuery = {};
export type RefundSellOfferRequestBody = { tx: string };
export type RefundSellOfferResponseBody = APISuccess;
export type RefundSellOfferErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED" | "TRANSACTION_INVALID" | "INTERNAL_SERVER_ERROR"
>;
