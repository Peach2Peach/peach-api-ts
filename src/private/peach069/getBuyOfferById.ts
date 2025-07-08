

import { APIError } from "../../@types/global";
import { BuyOffer69 } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetBuyOfferByIdRequestParams = {buyOfferId:string};
export type GetBuyOfferByIdRequestQuery = {};
export type GetBuyOfferByIdRequestBody =   {} 

type Props = RequestProps &
  GetBuyOfferByIdRequestParams &
  GetBuyOfferByIdRequestQuery &
  GetBuyOfferByIdRequestBody;

export const getBuyOfferById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({    buyOfferId}: Props) => {

    const finalUrl = `${url}/v069/buyOffer/`+String(buyOfferId)

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
     }) 
    return parseResponse<BuyOffer69, APIError<"UNAUTHORIZED"|"NOT_FOUND">>(response);
  };
