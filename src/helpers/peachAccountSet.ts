import { PeachAPIOptions } from '../types'

export const peachAccountSet = (options: PeachAPIOptions): options is Required<PeachAPIOptions> =>
  !!options.peachAccount
