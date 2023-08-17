import { NewUser, User } from './user'

export type AccessToken = {
  expiry: number
  accessToken: string
  user: User | NewUser
}

export type APISuccess = {
  success: true
}

export type APIError<E> = {
  error: E | 'INTERNAL_SERVER_ERROR' | 'FORM_INVALID' | 'UNAUTHORIZED' | 'TOO_MANY_REQUESTS'
  message?: string
  details?: any
}

export type Currency =
  | 'USD'
  | 'USDT'
  | 'EUR'
  | 'CHF'
  | 'GBP'
  | 'SEK'
  | 'PLN'
  | 'NOK'
  | 'CZK'
  | 'DKK'
  | 'HUF'
  | 'RON'
  | 'ISK'
  | 'BGN'

export type Pricebook = {
  [key in Currency]?: number
}

export type Country = 'DE' | 'FR' | 'IT' | 'ES' | 'NL' | 'UK' | 'SE'
