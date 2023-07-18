import { getStatus } from '../public/system/getStatus'
import { PublicPeachAPIHelpers, PeachAPIOptions } from '../types'

/**
 * Note: we estimate the time it took for the response to arrive from server to client
 * by dividing the round trip time in half
 * This is only an estimation as round trips are often asymmetric
 */
export const calculateClientServerTimeDifference = async (
  options: PeachAPIOptions,
  helpers: PublicPeachAPIHelpers,
): Promise<number> => {
  const start = Date.now()
  const result = await getStatus(options, helpers)()
  const end = Date.now()
  const roundTrip = (end - start) / 2

  if (!result.isOk()) {
    return 0
  }

  return end - roundTrip - result.getValue().serverTime
}
