import { TransactionStatus } from './electrs'

export type UTXO = {
  asset: string
  txid: string
  vout: number
  value: number
  status: TransactionStatus
}
