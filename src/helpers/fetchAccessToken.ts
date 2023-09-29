import { crypto } from 'bitcoinjs-lib'
import { auth } from '../private/user/auth'
import { PeachAPIOptions, PublicPeachAPIHelpers } from '../types'

export const fetchAccessToken
  = (options: Required<PeachAPIOptions>, helpers: PublicPeachAPIHelpers) => async (message: string) => {
    const authResult = await auth(
      options,
      helpers,
    )({
      publicKey: options.peachAccount.publicKey.toString('hex'),
      message,
      signature: options.peachAccount.sign(crypto.sha256(Buffer.from(message))).toString('hex'),
      uniqueId: options.uniqueId,
    })

    if (!authResult.isOk()) return undefined

    return {
      accessToken: `Basic ${Buffer.from(authResult.getValue().accessToken)}`,
      expiry: authResult.getValue().expiry,
    }
  }
