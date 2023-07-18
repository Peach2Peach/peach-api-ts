import { Currency } from './global'

export type PriceData = {
  pair: string
  price: number
  date: Date
}

export type TradingPair = `BTC${Currency}`
