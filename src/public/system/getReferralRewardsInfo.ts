import { APIError } from '../../@types/global';
import { parseResponse } from '../../helpers/parseResponse';
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types';

type Response =  {
  REFERRALCODE: number;
  FREETRADES: number;
  SATS: number;
} 

export const getReferralRewardsInfo =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: RequestProps = {}) => {
    const response = await fetch(`${url}/v1/info/referralRewards`, {
      headers: helpers.getPublicHeaders(url),
      method: 'GET',
      signal,
    })

    return parseResponse<Response, APIError<null>>(response)
  }
