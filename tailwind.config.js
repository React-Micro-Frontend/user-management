const sharedConfig = require('../custom-main/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "../custom-main/src/**/*.{js,ts,jsx,tsx}", // Include custom-main components
  ],
};
