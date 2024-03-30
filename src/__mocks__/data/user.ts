import { User } from '../../@types/user'

const pgpPublicKey =
  // eslint-disable-next-line max-len
  '-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: openpgp-mobile\n\nxsBNBGIyIM8BCAC/FTDaVmJ1kvkEF7Zv0kbQNgYmNMux0aGQMwA9fOA1Cvp/HPmL\nlD3Yuy2FQt3zMPZS5nimCWprs5HeuTONf2BQApFBtXrScwDnWvwAIP6Ldbf6XtH6\nFcxx5z4oROtgyKy11McS6T50UD9Ebp7wh/KR7c3cloxH54ADefYU5McWX0+ppCpy\nfZh+VIxvNBGALe1jqmQU/3TyCZKBAJ8Z2TuQqfZ+eMK7GvGJoll0DERfVbvPh4vj\n9SJ0wmRdrfD50s+a1v5s59/FHvSadk7Zun0G8G9tteTTTx+ghfOSR6Bhpbmsirr/\nAuvI0u8sT+tN/FQwJUBj8BT8EDWeU7WvvIVVABEBAAHNAMLAaAQTAQgAHAUCYjIg\nzwkQwtevQuBWmE0CGwMCGQECCwcCFQgAAOipCAB8x52lwTA6f0FOgoIfZTN+6ve9\nZH6W305ZK/ZyYn9KE9ubruyPxZj0LTClhK/jnxmmrYDmUZdapGFhraQb3wUFCFJc\nN5f+LGOHgqDvtfa0GfN8LwmYXMNAkfShzI3gJU4AqDfFv+9BuQkORpWYPF7eXZtl\nuvNsgQ2ezsGbSOvu5OtWIeaJBIBkJlkbS/UAh+Hrj1STsZxHCS7dhnePnWOMh/ES\nrGyp0T5Ep04TvhbrVV2sJYG95wehbGdqMtphXPKrX1tdn8hVhz17j6k7s+4z6GMS\nzXd5szk51rd8MMihGwHObiCf/j1wpvPc1JNmjMO2bEJ68lDSUNPSpcDwgJD2zsBN\nBGIyIM8BCADa+yXuWO0Nq1TJC73ATaUQL9U31VAeZe/bxr+Mf/pW1pABAb9rZGGN\nscP9jKUiJZPFfQCK3W3nu2XjRwKI6F7jlCwLGm+sDPhMURw3QI006s6pbeIJq1vo\nFlj94gMzsyIkuEf4tdKkWNtygbltD5g/1ZoO75vIDbf/E8P44G+JuLG6UV4gf40d\noNuQFuLgpOx8bWHy2Ev5Zcs4RhtMCQhQ1KUNZWBmR7zIvXbuJFUww68bznVL4SJY\nvbYTX/8TboeTYBN/Vp+d1NocTfO8h5ikdGxILyiKZiV/wguXd9nIR0KdI+8++sIT\nRnjuqmKYZwG0GMbwnCkdz2HkF/bYgd+JABEBAAHCwF8EGAEIABMFAmIyIM8JEMLX\nr0LgVphNAhsMAADDuggAX6EyWbfc1Ti2GCogyrUIp+2nh6IqVzG0CtqANBGUA9re\n60U+NrgXzffcZ+yrFYL6cT0C2XAutpP0o1wfUnsl19FMIPc6JOej7GOzew2flcuR\nRdxps7nqP00F2tce9hu+BugxW6K7bAnmxlq8K6n7/oZXsS1SJejl3pEFB0l4bIRL\ncp/Ql17hvtYLjb3qBNURS+Iu2GHsLZHJGpG50VQBk2kiVS0RjN17GiOejTs+Hb+4\nLEW3cv+Lk1RHAThlxX3XGQgU6M28ncS8Xs3WrqMk97nNYg8+xDX8YAqUZLa+kkYL\nApar4GBPVjEMVuNjtPfgC9PtIhFhnK3BFX7VZaCs3Q==\n=/EpH\n-----END PGP PUBLIC KEY BLOCK-----'
const pgpPublicKeyProof =
  // eslint-disable-next-line max-len
  '45a32da3eaaf89803af0cf6f13d68518147ca48c170f3d30a7fe38610513115e0bc73a9d6ea4e3d866014478e576baddfb705a0a36367fe11b8732c47f0b9c8f'

export const defaultUser: User = {
  bonusPoints: 0,
  creationDate: new Date('2023-03-01T13:39:55.942Z'),
  disputes: { opened: 0, won: 0, lost: 0, resolved: 0 },
  feeRate: 'hourFee',
  freeTrades: 0,
  historyRating: 1,
  id: '0213583209ada26c16e5c3157d86809f8fd46e602936a4e3d51cd988a42ebe19f3',
  isBatchingEnabled: false,
  maxFreeTrades: 0,
  medals: ['fastTrader', 'ambassador'],
  peachRating: 1,

  pgpPublicKey,
  pgpPublicKeyProof,
  pgpPublicKeys: [{ publicKey: pgpPublicKey, proof: pgpPublicKeyProof }],

  rating: 1,
  ratingCount: 13,
  recentRating: 1,
  referralCode: 'PR0063',
  referredTradingAmount: 0,
  openedTrades: 12,
  canceledTrades: 0,
  trades: 11,
  usedReferralCode: 'SATOSHI',
  userRating: 1,
  linkedIds: [],
  lastModified: new Date('2023-03-01T13:39:55.942Z'),
  disabled: false,
  banned: false,
  uniqueId: 'uniqueId',
  kyc: false,
}
