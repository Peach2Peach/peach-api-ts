

import { APIError } from "../../@types/global";
import { BuyOffer69TradeRequest } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetBuyOfferTradeRequestPerformedByIdRequestParams = {buyOfferId:number};
export type GetBuyOfferTradeRequestPerformedByIdRequestQuery = {};
export type GetBuyOfferTradeRequestPerformedByIdRequestBody =   {} 

type Props = RequestProps &
  GetBuyOfferTradeRequestPerformedByIdRequestParams &
  GetBuyOfferTradeRequestPerformedByIdRequestQuery &
  GetBuyOfferTradeRequestPerformedByIdRequestBody;

export const getBuyOfferTradeRequestPerformedById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({    buyOfferId}: Props) => {



    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestPerformed/`

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
     }) 

    return parseResponse<BuyOffer69TradeRequest, APIError<"UNAUTHORIZED"|"NOT_FOUND">>(response);
  };
