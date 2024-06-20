import { Contract } from "../@types/contract";
import { defaultUser } from "./userData";

/* eslint-disable max-len */
export const contract: Contract = {
  amount: 250000,
  buyer: {
    id: "02adcf3c857078dc3ca7064a49d20c6ae4978809057ffb75dc0750d8b5020aafe9",
    creationDate: new Date("2022-03-08T11:41:07.245Z"),
    openedTrades: 0,
    trades: 0,
    rating: 0,
    userRating: 0,
    ratingCount: 0,
    peachRating: 0,
    medals: [],
    disputes: {
      opened: 0,
      won: 0,
      lost: 0,
      resolved: 0,
    },
    historyRating: 0,
    recentRating: 0,

    pgpPublicKey: defaultUser.pgpPublicKey,
    pgpPublicKeyProof: defaultUser.pgpPublicKeyProof,
    pgpPublicKeys: defaultUser.pgpPublicKeys,
  },
  seller: {
    id: "03a9ea8d8000731f80287b43af99f28294b81ee011a5bde5dfd2beb6c03f6e3682",
    creationDate: new Date("2022-03-08T11:41:07.245Z"),
    openedTrades: 0,
    trades: 0,
    rating: 0,
    userRating: 0,
    ratingCount: 0,
    peachRating: 0,
    medals: [],
    disputes: {
      opened: 0,
      won: 0,
      lost: 0,
      resolved: 0,
    },
    historyRating: 0,
    recentRating: 0,

    pgpPublicKey: defaultUser.pgpPublicKey,
    pgpPublicKeyProof: defaultUser.pgpPublicKeyProof,
    pgpPublicKeys: defaultUser.pgpPublicKeys,
  },
  creationDate: new Date("2022-03-08T11:41:07.245Z"),

  symmetricKeyEncrypted: "TODO",
  symmetricKeySignature: "TODO",

  currency: "EUR",
  disputeActive: false,
  id: "14-15",
  paymentConfirmed: null,
  paymentExpectedBy: new Date("2022-03-08T23:41:07.245Z"),
  paymentMade: null,
  paymentMethod: "sepa",
  price: 89.04,
  premium: 1.5,
  escrow: "bcrt1qxhkluxqp9u5f4a79vclgdah5vrzjzn2t8yn5rje3cnkvqk6u9fgqe5raag",
  releaseAddress:
    "bcrt1qxhkluxqp9u5f4a79vclgdah5vrzjzn2t8yn5rje3cnkvqk6u9fgqe5raag",
  releaseTransaction: "rawtransaction",
  ratingBuyer: 0,
  ratingSeller: 0,

  disputeDate: null,
  disputeResolvedDate: null,

  cancelationRequested: false,
  canceled: false,

  messages: 0,
  unreadMessages: 0,

  buyerFee: 0,
  sellerFee: 0,
  tradeStatus: "tradeCompleted",
  lastModified: new Date("2022-03-08T11:41:07.245Z"),
  releasePsbt: "",
  isChatActive: true,
  isEmailRequired: false,
  priceCHF: 0,
  buyerPaymentDataEncrypted: "",
  buyerPaymentDataSignature: "",
  hashedPaymentData: [],
  buyerHashedPaymentData: [],
  disputeOutcomeAcknowledgedBy: [],
  paymentDataEncrypted: "",
  paymentDataSignature: "",
  paymentDataEncryptionMethod: "aes256",
};
