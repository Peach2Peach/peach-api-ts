import { BitcoinEvent } from './events'
import { Country, Currency } from './global'

export type EuPaymentMethods =
  | 'advcash'
  | 'applePay'
  | 'bizum'
  | 'blik'
  | 'fasterPayments'
  | 'friends24'
  | 'instantSepa'
  | 'iris'
  | 'keksPay'
  | 'lydia'
  | 'mbWay'
  | 'mobilePay'
  | 'n26'
  | 'nationalTransferBG'
  | 'nationalTransferCZ'
  | 'nationalTransferDK'
  | 'nationalTransferHU'
  | 'nationalTransferNO'
  | 'nationalTransferPL'
  | 'nationalTransferRO'
  | 'nationalTransferTR'
  | 'nationalTransferIS'
  | 'nationalTransferCH'
  | 'nationalTransferSE'
  | 'neteller'
  | 'papara'
  | 'paylib'
  | 'paypal'
  | 'paysera'
  | 'revolut'
  | 'satispay'
  | 'sepa'
  | 'skrill'
  | 'straksbetaling'
  | 'swish'
  | 'twint'
  | 'verse'
  | 'vipps'
  | 'wise'
  | 'bankera'
  | 'rebellion'
  | 'postePay'
export type LatAmPaymentMethods =
  | 'alias'
  | 'bancolombia'
  | 'cbu'
  | 'cvu'
  | 'mercadoPago'
  | 'nequi'
  | 'rappipay'
  | 'sinpe'
  | 'sinpeMovil'
  | 'pix'

export type AfricaPaymentMethods =
  | 'airtelMoney'
  | 'chippercash'
  | 'eversend'
  | 'm-pesa'
  | 'moov'
  | 'mtn'
  | 'nationalTransferNG'
  | 'orangeMoney'
  | 'wave'
  | 'payday'
  | 'flutterwave'
  | 'mobileAirtime'
  | 'klasha'
  | 'accrue'
  | 'wirepay'

export type BitcoinPaymentMethods = 'liquid' | 'lnurl'
export type InternationalPaymentMethds = 'giftCard.amazon' | `giftCard.amazon.${Country}`
export type CashPaymentMethds = `cash.${BitcoinEvent['id']}`

export type PaymentMethod =
  | EuPaymentMethods
  | LatAmPaymentMethods
  | AfricaPaymentMethods
  | InternationalPaymentMethds
  | BitcoinPaymentMethods
  | CashPaymentMethds

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
