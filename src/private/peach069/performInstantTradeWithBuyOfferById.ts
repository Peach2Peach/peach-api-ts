import { Contract } from "../../@types/contract";
import { APIError, Currency } from "../../@types/global";
import { EscrowVersion } from "../../@types/offer";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type performInstantTradeWithBuyOfferByIdRequestParams = {
  buyOfferId: string;
};
export type performInstantTradeWithBuyOfferByIdRequestQuery = {};
export type performInstantTradeWithBuyOfferByIdRequestBody = {
  paymentMethod: PaymentMethod;
  currency: Currency;
  paymentDataHashed: any;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  symmetricKeyEncrypted: string;
  symmetricKeySignature: string;
  maxMiningFeeRate?: number;
  /** opt in to the MuSig2 taproot escrow (bitcoin only) by sending 2 */
  escrowVersion?: EscrowVersion;
  // returnAddress: string;
};

type Props = RequestProps &
  performInstantTradeWithBuyOfferByIdRequestParams &
  performInstantTradeWithBuyOfferByIdRequestQuery &
  performInstantTradeWithBuyOfferByIdRequestBody;

export const performInstantTradeWithBuyOfferById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    buyOfferId,
    paymentMethod,
    currency,
    paymentDataHashed,
    paymentDataEncrypted,
    paymentDataSignature,
    symmetricKeyEncrypted,
    symmetricKeySignature,
    maxMiningFeeRate,
    escrowVersion,
    // returnAddress,
  }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/performInstantTrade`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        paymentMethod,
        currency,
        paymentDataHashed,
        paymentDataEncrypted,
        paymentDataSignature,
        symmetricKeyEncrypted,
        symmetricKeySignature,
        maxMiningFeeRate,
        escrowVersion,
        // returnAddress,
      }),
    });

    return parseResponse<Contract, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
