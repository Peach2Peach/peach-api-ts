import { BitcoinEvent } from './events'
import { Country, Currency } from './global'

export type PaymentMethod =
  | 'sepa'
  | 'instantSepa'
  | 'paypal'
  | 'revolut'
  | 'applePay'
  | 'wise'
  | 'twint'
  | 'swish'
  | 'mbWay'
  | 'bizum'
  | 'satispay'
  | 'vipps'
  | 'fasterPayments'
  | 'mobilePay'
  | 'skrill'
  | 'neteller'
  | 'paysera'
  | 'lydia'
  | 'blik'
  | 'straksbetaling'
  | 'keksPay'
  | 'friends24'
  | 'n26'
  | 'iris'
  | 'verse'
  | 'paylib'
  | 'nationalTransferBG'
  | 'nationalTransferCZ'
  | 'nationalTransferDK'
  | 'nationalTransferHU'
  | 'nationalTransferNO'
  | 'nationalTransferPL'
  | 'nationalTransferRO'
  | 'giftCard.amazon'
  | `giftCard.amazon.${Country}`
  | 'liquid.usdt'
  | 'cash'
  | `cash.${BitcoinEvent['id']}`

export type PaymentMethodInfo = {
  id: PaymentMethod
  currencies: Currency[]
  countries?: Country[]
  rounded?: boolean
  anonymous: boolean
}
export type PaymentData = {
  [key: string]: any
  id: string
  type: PaymentMethod
}
export type MeansOfPayment = Partial<Record<Currency, PaymentMethod[]>>
