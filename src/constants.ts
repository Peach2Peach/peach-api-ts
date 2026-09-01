export const PREFETCH_ACCESS_TOKEN = 1000 * 60 * 5;

/** escrow version every newly created sell offer must use: the single-sig
 * taproot escrow the seller owns alone. The server rejects anything else. */
export const ESCROW_VERSION = 2;
