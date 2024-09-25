import { BitcoinEvent } from "./events";
import { Country, Currency } from "./global";
import { PaymentMethodCountry } from "./offer";

export type PaymentMethodField =
  | "userName"
  | "email"
  | "phone"
  | "reference"
  | "beneficiary"
  | "iban"
  | "bic"
  | "wallet"
  | "accountNumber"
  | "ukBankAccount"
  | "ukSortCode"
  | "receiveAddress"
  | "lnurlAddress"
  | "pixAlias"
  | "postePayNumber";

export type EuPaymentMethods =
  | "advcash"
  | "bankera"
  | "bizum"
  | "blik"
  | "fasterPayments"
  | "friends24"
  | "instantSepa"
  | "iris"
  | "keksPay"
  | "lydia"
  | "mbWay"
  | "mobilePay"
  | "n26"
  | "nationalTransferBG"
  | "nationalTransferCZ"
  | "nationalTransferDK"
  | "nationalTransferHU"
  | "nationalTransferNO"
  | "nationalTransferPL"
  | "nationalTransferRO"
  | "nationalTransferTR"
  | "nationalTransferCH"
  | "nationalTransferIS"
  | "nationalTransferSE"
  | "neteller"
  | "papara"
  | "paylib"
  | "paypal"
  | "paysera"
  | "postePay"
  | "rebellion"
  | "revolut"
  | "satispay"
  | "sepa"
  | "skrill"
  | "strike"
  | "straksbetaling"
  | "swish"
  | "twint"
  | "vipps"
  | "wise";
export type LatAmPaymentMethods =
  | "alias"
  | "bancolombia"
  | "cbu"
  | "cvu"
  | "mercadoPago"
  | "nequi"
  | "pix"
  | "rappipay"
  | "sinpe"
  | "sinpeMovil";

export type AfricaPaymentMethods =
  | "accrue"
  | "airtelMoney"
  | "chippercash"
  | "eversend"
  | "klasha"
  | "m-pesa"
  | "moov"
  | "mtn"
  | "nationalTransferNG"
  | "orangeMoney"
  | "payday"
  | "wave"
  | "wirepay";

export type BitcoinPaymentMethods = "liquid" | "lnurl";
export type InternationalPaymentMethds =
  | "giftCard.amazon"
  | `giftCard.amazon.${PaymentMethodCountry}`;
export type CashPaymentMethds = `cash.${BitcoinEvent["id"]}`;

export type PaymentMethod =
  | EuPaymentMethods
  | LatAmPaymentMethods
  | AfricaPaymentMethods
  | InternationalPaymentMethds
  | BitcoinPaymentMethods
  | CashPaymentMethds;

export type PaymentMethodInfo = {
  id: PaymentMethod;
  currencies: Currency[];
  fields: {
    mandatory: PaymentMethodField[][][];
    optional: PaymentMethodField[];
  };
  countries?: Country[];
  rounded?: boolean;
  anonymous: boolean;
};
export type PaymentData = {
  id: string;
  label: string;
  type: PaymentMethod;
  currencies: Currency[];
  country?: PaymentMethodCountry;
  hidden?: boolean;
  reference?: string;
};
export type MeansOfPayment = Partial<Record<Currency, PaymentMethod[]>>;
