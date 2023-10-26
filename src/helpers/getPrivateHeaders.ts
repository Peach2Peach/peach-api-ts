import { PrivateHeaders } from '../types'
import { getPublicHeaders } from './getPublicHeaders'

export const getPrivateHeaders = (url: string, authToken: string, userAgent?: string): PrivateHeaders => ({
  ...getPublicHeaders(url, userAgent),
  Authorization: authToken,
})
