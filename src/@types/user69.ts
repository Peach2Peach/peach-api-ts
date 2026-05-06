export type User69 = {
  id: string;
  offerAlertsActive: boolean;
  lastAddressUsedIndex?: number;
  encryptedPaymentData?: string | null;
  encryptedPaymentDataSignature?: string | null;
  encryptedCustomRefundAddress?: string | null;
  encryptedCustomRefundAddressSignature?: string | null;
};
