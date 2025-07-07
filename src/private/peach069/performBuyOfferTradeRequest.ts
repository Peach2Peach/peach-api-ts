

import { APIError, Currency } from "../../@types/global";
import { BuyOffer69TradeRequest } from "../../@types/offer";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PerformBuyOfferTradeRequestRequestParams = {buyOfferId:number};
export type PerformBuyOfferTradeRequestRequestQuery = {};
export type PerformBuyOfferTradeRequestRequestBody =   {
	
	paymentMethod: PaymentMethod;
	currency:Currency;
	paymentDataHashed:any;
paymentDataEncrypted:string;
paymentDataSignature:string;
symmetricKeyEncrypted:string;
symmetricKeySignature:string;
maxMiningFeeRate: number;
returnAddress:string
}

type Props = RequestProps &
  PerformBuyOfferTradeRequestRequestParams &
  PerformBuyOfferTradeRequestRequestQuery &
  PerformBuyOfferTradeRequestRequestBody;

export const performBuyOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({buyOfferId,paymentMethod,
	currency,
	paymentDataHashed,
paymentDataEncrypted,
paymentDataSignature,
symmetricKeyEncrypted,
symmetricKeySignature,
maxMiningFeeRate,
returnAddress}: Props) => {



    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestPerformed`

    const response = await fetch(finalUrl, {
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
returnAddress
        
      }),
     }) 

     

    return parseResponse<BuyOffer69TradeRequest, APIError<"UNAUTHORIZED"|"NOT_FOUND">>(response);
  };
