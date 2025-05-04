if (process.env.VERCEL) {
  process.env.SKIP_ENV_VALIDATION = 'true';
}

await import("./src/env.mjs");

const config = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default config;
