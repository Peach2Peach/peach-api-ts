export const handleMissingPeachAccount = () => {
  const authError = new Error('Peach Account not set')
  throw authError
}
