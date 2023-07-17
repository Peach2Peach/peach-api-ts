import { BIP32Interface } from 'bip32'

export type RequestProps = {
  timeout?: number
  abortSignal?: AbortSignal
}

export type PublicHeaders = {
  Origin: string
  Referer: string
  Accept: 'application/json'
  'Content-Type': 'application/json'
}
export type PrivateHeaders = PublicHeaders & { Authorization: string }

export type PeachAPIOptions = {
  url: string
  peachAccount: BIP32Interface
  uniqueId: string
}
export type PublicPeachAPIHelpers = {
  getPublicHeaders: (url: string) => PublicHeaders
  getAuthenticationChallenge: (diff?: number) => string
}
export type PrivateAPIHelpers = {
  getPrivateHeaders: (url: string) => PrivateHeaders
}
export type PeachAPIHelpers = PublicPeachAPIHelpers & PrivateAPIHelpers
