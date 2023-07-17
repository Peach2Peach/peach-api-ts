export const getAuthenticationChallenge = (clientServerTimeDifference = 0) =>
  `Peach Registration ${String(Date.now() - clientServerTimeDifference)}`
