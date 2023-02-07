/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD  } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      images: {
        domains: ["http://localhost:5000/"],
      },
      env: {
        base_url: "http://localhost:5000/",
      },
      httpAgentOptions: {
        keepAlive: true,
      },
    };
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["https://nameless-sierra-86136.herokuapp.com/"],
      domains: ["https://nameless-sierra-86136.herokuapp.com/"], hostname: "images.pexels.com"
    },
    env: {
      base_url: "https://nameless-sierra-86136.herokuapp.com/",
    },
    httpAgentOptions: {
      keepAlive: true,
    },
  };
};
