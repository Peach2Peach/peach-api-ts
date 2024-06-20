export const parseError = (e: Error | string | unknown): string => {
  let err = "UNKNOWN_ERROR";
  if (typeof e === "string") {
    err = e.toUpperCase();
  } else if (e instanceof Error) {
    err = e.message;
  }
  return err;
};
