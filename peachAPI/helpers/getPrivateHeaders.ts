import { getPublicHeaders } from './getPublicHeaders'
import { PrivateHeaders } from '../types'

export const getPrivateHeaders = (url: string, authToken: string): PrivateHeaders => ({
  ...getPublicHeaders(url),
  Authorization: authToken,
})
