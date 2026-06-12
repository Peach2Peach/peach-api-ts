export type EncryptedUserFieldKind =
  | "encryptedPaymentData"
  | "encryptedCustomRefundAddress"
  | "encryptedCustomPayoutAddress";

export type ContractEncryptedField =
  | "symmetricKeyEncrypted"
  | "paymentDataEncrypted";

// Self-addressing blob of data encrypted to the user's PGP key, returned by
// GET /v069/selfUser/encryptedData. The descriptor (source + ids) maps each blob
// back to its storage location when re-submitted.
export type EncryptedDataBlob =
  | {
      source: "user69";
      field: EncryptedUserFieldKind;
      encrypted: string;
      signature: string;
    }
  | {
      source: "offer";
      offerId: string;
      paymentMethod: string;
      encrypted: string;
      signature: string;
    }
  | {
      source: "buyOffer69";
      buyOfferId: number;
      paymentMethod: string;
      encrypted: string;
      signature: string;
    }
  | {
      source: "contract";
      contractId: string;
      field: ContractEncryptedField;
      encrypted: string;
      signature: string;
      // Current non-user recipients to re-encrypt to (besides the new key):
      // counterparty key(s), plus Peach's key only for instant-trade symmetricKey
      // blobs where Peach is already a recipient.
      recipientPgpPublicKeys: string[];
    }
  | {
      // A trade request the user PERFORMED; its symmetricKeyEncrypted is encrypted
      // to the requester + the offer owner.
      source: "buyOfferTradeRequest" | "sellOfferTradeRequest";
      tradeRequestId: number;
      encrypted: string;
      signature: string;
      // The offer owner's current key(s) — must remain recipients.
      recipientPgpPublicKeys: string[];
    };

// Re-encrypted replacement sent to POST /v069/selfUser/rotatePgpKey. Same
// descriptor as the corresponding EncryptedDataBlob, minus the recipient hints.
export type SubmittedEncryptedBlob =
  | {
      source: "user69";
      field: EncryptedUserFieldKind;
      encrypted: string;
      signature: string;
    }
  | {
      source: "offer";
      offerId: string;
      paymentMethod: string;
      encrypted: string;
      signature: string;
    }
  | {
      source: "buyOffer69";
      buyOfferId: number;
      paymentMethod: string;
      encrypted: string;
      signature: string;
    }
  | {
      source: "contract";
      contractId: string;
      field: ContractEncryptedField;
      encrypted: string;
      signature: string;
    }
  | {
      source: "buyOfferTradeRequest" | "sellOfferTradeRequest";
      tradeRequestId: number;
      encrypted: string;
      signature: string;
    };
