

import { APIError } from "../../@types/global";
import { SellOffer } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetSellOfferByIdRequestParams = {sellOfferId:string};
export type GetSellOfferByIdRequestQuery = {};
export type GetSellOfferByIdRequestBody =   {} 

type Props = RequestProps &
  GetSellOfferByIdRequestParams &
  GetSellOfferByIdRequestQuery &
  GetSellOfferByIdRequestBody;

export const getSellOfferById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({    sellOfferId}: Props) => {

    const finalUrl = `${url}/v069/sellOffer/`+String(sellOfferId)

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
     }) 
    return parseResponse<SellOffer, APIError<"UNAUTHORIZED"|"NOT_FOUND">>(response);
  };
