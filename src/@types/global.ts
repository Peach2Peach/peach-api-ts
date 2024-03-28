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
  | 'BTC'
  | 'SAT'
  | 'USD'
  | 'EUR'
  | 'CHF'
  | 'GBP'
  | 'SEK'
  | 'DKK'
  | 'BGN'
  | 'CZK'
  | 'HUF'
  | 'PLN'
  | 'RON'
  | 'ISK'
  | 'NOK'
  | 'TRY'
  | 'USDT'
  | 'ARS'
  | 'COP'
  | 'PEN'
  | 'MXN'
  | 'CLP'
  | 'XOF'
  | 'NGN'
  | 'CDF'
  | 'CRC'
  | 'BRL'
  | 'GTQ'
  | 'ZAR'
  | 'KES'
  | 'GHS'
  | 'TZS'
  | 'VND'
  | 'MAD'
  | 'RWF'
  | 'XAF'
  | 'MGA'
  | 'GNF'
  | 'VEF'
  | 'PAB'
  | 'HNL'
  | 'DOP'
  | 'CUP'
  | 'NIO'
  | 'PYG'
  | 'UYU'
  | 'VES'
  | 'BOB'
  | 'UZS'
  | 'RSD'
  | 'KWD'
  | 'KZT'
  | 'ILS'
  | 'NZD'
  | 'EGP'
  | 'PHP'
  | 'JPY'
  | 'AUD'
  | 'CNY'
  | 'IDR'
  | 'INR'
  | 'RUB'
  | 'XAU'
  | 'UAH'

export type Pricebook = {
  [key in Currency]?: number
}

export type Country = 'DE' | 'FR' | 'IT' | 'ES' | 'NL' | 'UK' | 'SE' | 'FI' | 'BE' | 'LV'
