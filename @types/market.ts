import { Currency } from './global'

export type PriceData = {
  pair: string
  price: number
  date: Date
}

export type TradingPair = `BTC${Currency}`
export type ExchangeId =
  | 'gemini'
  | 'binance'
  | 'kraken'
  | 'bitfinex'
  | 'bitpanda'
  | 'coingecko'
  | 'coinpaprika'
  | 'zonda'
  | 'exchangerate'
  | 'openexchangerates'
  | 'currencybeacon'

export type PeachPairInfo = {
  pair: TradingPair
  price: number
}

export type PeachPairInfos = PeachPairInfo[]

export type GeminiPairInfo = {
  pair: string
  price: string
  percentChange24h: string
}

export type GeminiError = {
  result: 'error'
  reason: string
  message: string
}

export type BinancePairInfo = {
  symbol: string
  price: string
}

export type BinanceError = {
  code: number
  msg: string
}

export type KrakenPairInfo = {
  a: string[]
  b: string[]
  c: string[]
  v: string[]
  p: string[]
  t: number[]
  l: string[]
  h: string[]
  o: string
}
export type KrakenResponse = {
  error: []
  result: {
    [key: string]: KrakenPairInfo
  }
}
export type KrakenError = {
  error: string[]
  result: object
}

export type BitfinexPairInfo = [string, ...number[]]

export type BitfinexError = [error: 'error', code: number, reason: string]

export type BitPandaPairInfo = {
  instrument_code: string
  last_price: string
  sequence: number
  time: string
  state: string
  is_frozen: number
  quote_volume: string
  base_volume: string
  best_bid: string
  best_ask: string
  price_change: string
  price_change_percentage: string
  high: string
  low: string
}

export type BitPandaError = {
  error: string
}

export type CoinGeckoPairInfo = {
  name: string
  unit: string
  value: number
  type: 'fiat' | 'crypto' | 'commodity' | string
}
export type CoinGeckoResponse = {
  rates: Record<string, CoinGeckoPairInfo>
}

export type CoinGeckoError = {
  error: string
}

export type CoinPaprikaResponse = {
  [key: string]: any
  quotes: Partial<Record<Currency, { [key: string]: string | number } & { price: number }>>
}

export type CoinPaprikaError = {
  error: string
}

export type ZondaResponse = {
  status: string
  items: Partial<Record<string, {} | ({ [key: string]: string | number | object } & { rate: string })>>
}

export type ZondaError = {
  status: 'Fail'
  errors: string[]
}

export type ExchangeRateError = {
  success: false
}

export type ExchangeRateResponse = {
  motd: {
    msg: string
    url: string
  }
  base: string
  success: boolean
  date: string
  rates: {
    [key: string]: number
  }
}

export type OpenExchangeRatesError = {
  error: true
}

export type OpenExchangeRatesResponse = {
  disclaimer: string
  license: string
  timestamp: number
  base: string
  rates: {
    [key: string]: number
  }
}

export type CurrencyBeaconError = {
  meta: {
    code: number
    error_type: string
    error_detail: string
  }
  response: []
}

export type CurrencyBeaconResponse = {
  meta: {
    code: number
    disclaimer: string
  }
  response: {
    date: string
    base: string
    rates: {
      [key: string]: number
    }
  }
}
