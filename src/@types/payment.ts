import { BitcoinEvent } from "./events";
import { Country, Currency } from "./global";
import { PaymentMethodCountry } from "./offer";

export type PaymentMethodField =
  | "accountNumber"
  | "beneficiary"
  | "bic"
  | "email"
  | "iban"
  | "lnurlAddress"
  | "phone"
  | "pixAlias"
  | "postePayNumber"
  | "receiveAddress"
  | "reference"
  | "ukBankAccount"
  | "ukSortCode"
  | "userName"
  | "wallet";

export type EuPaymentMethods =
  | "advcash"
  | "bankera"
  | "bizum"
  | "blik"
  | "fasterPayments"
  | "friends24"
  | "giftCard.steam"
  | "instantSepa"
  | "iris"
  | "keksPay"
  | "lydia"
  | "mbWay"
  | "mobilePay"
  | "n26"
  | "nationalTransferBG"
  | "nationalTransferCH"
  | "nationalTransferCZ"
  | "nationalTransferDK"
  | "nationalTransferHU"
  | "nationalTransferIS"
  | "nationalTransferNO"
  | "nationalTransferPL"
  | "nationalTransferRO"
  | "nationalTransferSE"
  | "nationalTransferTR"
  | "neteller"
  | "papara"
  | "payeer"
  | "paylib"
  | "paypal"
  | "paysera"
  | "perfectMoney"
  | "postePay"
  | "rebellion"
  | "revolut"
  | "satispay"
  | "sberbank"
  | "sepa"
  | "skrill"
  | "stp"
  | "straksbetaling"
  | "strike"
  | "swish"
  | "tinkoff"
  | "twint"
  | "vipps"
  | "westernUnion"
  | "wise"
  | "yooMoney";

export type LatAmPaymentMethods =
  | "alias"
  | "bancolombia"
  | "bankTransferSuriname"
  | "cbu"
  | "chileBankDeposit"
  | "cvu"
  | "daviPlata"
  | "guatemalaBankDeposit"
  | "mercadoPago"
  | "nequi"
  | "paraguayBankTransfer"
  | "peruBankDeposit"
  | "pix"
  | "rappipay"
  | "sinpe"
  | "sinpeMovil"
  | "spei"
  | "tigoMoneyBolivia"
  | "tigoMoneyElSalvador"
  | "tigoMoneyGuatemala"
  | "tigoMoneyHonduras"
  | "tigoMoneyParaguay";

export type AfricaPaymentMethods =
  | "accrue"
  | "airtelMoney"
  | "apaym"
  | "chippercash"
  | "djamo"
  | "eversend"
  | "kcbBankKenya"
  | "klasha"
  | "m-pesa"
  | "moov"
  | "mtn"
  | "nationalTransferNG"
  | "orangeMoney"
  | "payday"
  | "tigoPesa"
  | "wave"
  | "wirepay";

export type OceaniaPaymentMethods = "payID" | "osko";
export type AsiaPaymentMethods =
  | "UPI"
  | "Paytm"
  | "nationalTransferSG"
  | "payLah";

export type BitcoinPaymentMethods = "liquid" | "lnurl";
export type InternationalPaymentMethds =
  | "giftCard.amazon"
  | `giftCard.amazon.${PaymentMethodCountry}`;
export type CashPaymentMethds = `cash.${BitcoinEvent["id"]}`;

export type PaymentMethod =
  | EuPaymentMethods
  | LatAmPaymentMethods
  | AfricaPaymentMethods
  | OceaniaPaymentMethods
  | AsiaPaymentMethods
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
