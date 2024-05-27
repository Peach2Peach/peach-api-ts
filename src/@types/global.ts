import { NewUser, User } from './user';

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
  | 'TRY'
  | 'BGN'
  | 'ARS'
  | 'COP'
  | 'PEN'
  | 'GTQ'
  | 'MXN'
  | 'BRL'
  | 'CLP'
  | 'CDF'
  | 'XOF'
  | 'NGN'
  | 'CRC'
  | 'ZAR'
  | 'KES'
  | 'GHS'
  | 'UAH'
  | 'XAU'
  | 'RUB'
  | 'BOB'
  | 'CUP'
  | 'DOP'
  | 'HNL'
  | 'NIO'
  | 'PAB'
  | 'VES'
  | 'UYU'
  | 'PYG'
  | 'TZS'
  | 'INR'
  | 'UZS'
  | 'RSD'
  | 'KZT'
  | 'KWD'
  | 'ILS'
  | 'NZD'
  | 'PHP'
  | 'EGP'
  | 'CNY'
  | 'JPY'
  | 'AUD'
  | 'IDR'
  | 'VND'
  | 'MAD'
  | 'RWF'
  | 'XAF'
  | 'MGA'
  | 'GNF'
  | 'AED'
  | 'PKR'
  | 'SGD'

export type Pricebook = {
  [key in Currency]?: number
}

export type MeetupCountries = 'DE' | 'FR' | 'IT' | 'ES' | 'NL' | 'UK' | 'SE' | 'FI' | 'BE' | 'LV'
