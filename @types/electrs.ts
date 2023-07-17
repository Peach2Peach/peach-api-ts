export type Input = {
  txid: string
  vout: number
  prevout: {
    scriptpubkey: string
    scriptpubkey_asm: string
    scriptpubkey_type: string
    scriptpubkey_address: string
    value: number
  }
  scriptsig: string
  scriptsig_asm: string
  inner_redeemscript_asm?: string
  witness?: string[]
  inner_witnessscript_asm?: string
  is_coinbase: boolean
  sequence: number
}

export type Output = {
  scriptpubkey: string
  scriptpubkey_asm: string
  scriptpubkey_type: string
  scriptpubkey_address?: string
  value: number
}

export type TransactionStatus = {
  confirmed: boolean
  block_height?: number
  block_hash?: string
  block_time?: number
}

export type UTXO = {
  txid: string
  vout: number
  value: number
  status: TransactionStatus
}

export type Transaction = {
  txid: string
  version: number
  locktime: number
  vin: Input[]
  vout: Output[]
  size: number
  weight: number
  fee: number
  value?: number
  status: TransactionStatus
}

export type ChainStats = {
  funded_txo_count: number
  funded_txo_sum: number
  spent_txo_count: number
  spent_txo_sum: number
  tx_count: number
}

export type MempoolStats = {
  funded_txo_count: number
  funded_txo_sum: number
  spent_txo_count: number
  spent_txo_sum: number
  tx_count: number
}

export type Address = {
  address: string
  chain_stats: ChainStats
  mempool_stats: MempoolStats
}

// electrs also returns the range of 1-25, extend values as needed
export type TargetBlocks = '1' | '3' | '6' | '25' | '144' | '504' | '1008'
export type ConfirmationTargets = {
  [key in TargetBlocks]: number
}

export type FeeRecommendation = {
  fastestFee: number
  halfHourFee: number
  hourFee: number
  economyFee: number
  minimumFee: number
}
