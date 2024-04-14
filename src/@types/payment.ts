import { BitcoinEvent } from './events';
import { Currency, MeetupCountries } from './global';
import { PaymentMethodCountry } from './offer';

export type EuPaymentMethods =
  | 'advcash'
  | 'applePay'
  | 'bankera'
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
  | 'nationalTransferCH'
  | 'nationalTransferIS'
  | 'nationalTransferSE'
  | 'nationalTransferMX'
  | 'neteller'
  | 'papara'
  | 'paylib'
  | 'paypal'
  | 'paysera'
  | 'postePay'
  | 'rebellion'
  | 'revolut'
  | 'satispay'
  | 'sepa'
  | 'skrill'
  | 'straksbetaling'
  | 'swish'
  | 'twint'
  | 'vipps'
  | 'privat24'
  | 'twyp'
  | 'tikkie'
  | 'perfectMoney'
  | 'yoomoney'
  | 'payeer'
  | 'trFast'
  | 'eft'
  | 'westernUnionEU'
  | 'westernUnion'
  | 'wise'

export type LatAmPaymentMethods =
  | 'alias'
  | 'bancolombia'
  | 'cbu'
  | 'cvu'
  | 'mercadoPago'
  | 'nequi'
  | 'pix'
  | 'rappipay'
  | 'sinpe'
  | 'boleto'
  | 'stp'
  | 'spei'
  | 'daviPlata'
  | 'tigoHonduras'
  | 'tigoBolivia'
  | 'tigoSalvador'
  | 'tigoParaguay'
  | 'tigoGuatemala'
  | 'abitab'
  | 'brou'
  | 'practicaja'
  | 'ted'
  | 'nationalTransferBO'
  | 'nationalTransferCL'
  | 'nationalTransferGT'
  | 'nationalTransferNI'
  | 'nationalTransferPE'
  | 'nationalTransferPY'
  | 'nationalTransferSR'
  | 'nationalTransferVE'
  | 'sinpeMovil'
  | 'westernUnion'

export type AfricaPaymentMethods =
  | 'accrue'
  | 'airtelMoney'
  | 'chippercash'
  | 'eversend'
  | 'klasha'
  | 'm-pesa'
  | 'moov'
  | 'mtn'
  | 'nationalTransferNG'
  | 'orangeMoney'
  | 'payday'
  | 'wave'
  | 'wirepay'
  | 'flutterwave'
  | 'vodafoneCash'
  | 'djamo'
  | 'aPaym'
  | 'tigoPesa'
  | 'westernUnion'
  | 'equityBank'
  | 'kcbBank'
  | 'nationalTransferKE'
  | 'nationalTransferZA'
  | 'mobileAirtime'

export type AsiaPaymentMethods =
  | 'payeer'
  | 'yoomoney'
  | 'upi'
  | 'paytmWallet'
  | 'sberbank'
  | 'paysend'
  | 'eft'
  | 'tinkoff'
  | 'bankera'
  | 'trFast'
  | 'papara'
  | 'nationalTransferTR'
  | 'nationalTransferAE'
  | 'nationalTransferPK'

export type InternationalPaymentMethds =
  | 'giftCard.amazon'
  | 'perfectMoney'
  | 'payeer'
  | 'paysend'
  | 'giftCard.steam'
  | `giftCard.amazon.${PaymentMethodCountry}`

export type PaymentMethodField =
  | 'userName'
  | 'email'
  | 'phone'
  | 'reference'
  | 'beneficiary'
  | 'iban'
  | 'bic'
  | 'wallet'
  | 'accountNumber'
  | 'ukBankAccount'
  | 'ukSortCode'
  | 'receiveAddress'
  | 'lnurlAddress'
  | 'pixAlias'
  | 'postePayNumber'
  | 'edrpou'
  | 'clabe'
  | 'bankName'
  | 'steamFriendCode'
  | 'upiTag'
  | 'trSortCode'
  | 'cardNumber'
  | 'physicalAddress'
  | 'mobileNetwork'
  | 'bankCode'
  | 'brSortCode' // ISPB code (https://bank.codes/numero-do-banco/)
  | 'cpf'
  | 'cedulaIdentidad'
  | 'countryField'
  | 'bankBranch'
  | 'rutNumber'
  | 'dniNumber'
  | 'abitabAgent'
  | 'payeerNumber'
  | 'perfectMoneyNumber'

export type BitcoinPaymentMethods = 'liquid' | 'lnurl'
export type InternationalPaymentMethods =
  | 'giftCard.steam'
  | 'giftCard.amazon'
  | 'perfectMoney'
  | 'payeer'
  | 'paysend'
  | `giftCard.amazon.${PaymentMethodCountry}`
export type CashPaymentMethds = `cash.${BitcoinEvent['id']}`

export type PaymentMethod =
  | EuPaymentMethods
  | LatAmPaymentMethods
  | AfricaPaymentMethods
  | AsiaPaymentMethods
  | InternationalPaymentMethds
  | BitcoinPaymentMethods
  | CashPaymentMethds

export type PaymentMethodInfo = {
  id: PaymentMethod
  currencies: Currency[]
  fields: {
    mandatory: PaymentMethodField[][][]
    optional: PaymentMethodField[]
  }
  countries?: MeetupCountries[]
  rounded?: boolean
  anonymous: boolean
}
export type PaymentData = {
  id: string
  label: string
  type: PaymentMethod
  currencies: Currency[]
  country?: PaymentMethodCountry
  hidden?: boolean
  reference?: string
}
export type MeansOfPayment = Partial<Record<Currency, PaymentMethod[]>>
