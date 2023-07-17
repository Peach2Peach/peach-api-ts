import { getPublicHeaders } from '../public/getPublicHeaders'
import { fetchAccessToken } from './user'

export const getPrivateHeaders = async (url: string): Promise<RequestInit['headers']> => ({
  ...getPublicHeaders(url),
  Authorization: await fetchAccessToken(),
})
