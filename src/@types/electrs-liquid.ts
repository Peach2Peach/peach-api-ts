import { TransactionStatus } from './electrs'

export type UTXO = {
  asset: string
  txid: string
  vout: number
  value: number
  status: TransactionStatus
  assetcommitment?: string,
  noncecommitment?: string,
  valuecommitment?: string,
}


export type Input = {
  txid: string;
  vout: number;
  prevout?: {
    scriptpubkey: string;
    scriptpubkey_asm: string;
    scriptpubkey_type: string;
    scriptpubkey_address?: string;
    value: number;
    asset: string;
  };
  scriptsig: string;
  scriptsig_asm: string;
  inner_redeemscript_asm?: string;
  witness?: string[];
  is_coinbase: boolean;
  is_pegin: boolean;
  sequence: number;
};

export type Output = {
  scriptpubkey: string;
  scriptpubkey_asm: string;
  scriptpubkey_type: string;
  scriptpubkey_address?: string;
  value: number;
  asset: string;
};

export type Transaction = {
  txid: string;
  version: number;
  locktime: number;
  vin: Input[];
  vout: Output[];
  size: number;
  weight: number;
  fee: number;
  value?: number;
  status: TransactionStatus;
};