import { APIError } from '../../@types/global'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIOptions, PublicPeachAPIHelpers, RequestProps } from '../../types'

type NewsItem = {
  text: string
  url: string
}
type GetNewsResponse = NewsItem[]

export const getNews =
  ({ url }: PeachAPIOptions, helpers: PublicPeachAPIHelpers) =>
  async ({ signal }: RequestProps = {}) => {
    const response = await fetch(`${url}/v1/info/news`, {
      headers: helpers.getPublicHeaders(url),
      method: 'GET',
      signal,
    })

    return parseResponse<GetNewsResponse, APIError<null>>(response)
  }
