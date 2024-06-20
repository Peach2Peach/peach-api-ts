const suffix = process.env.NODE_ENV || process.env.APP_ENV || "sandbox";

module.exports = (api) => {
  const path = `.env.${suffix}`;
  api.cache(suffix !== "sandbox");

  console.log("dotenv path: ", process.env.NODE_ENV, path);
  return {
    presets: ["@babel/preset-env"],
  };
};
