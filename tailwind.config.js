
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html", // Your main HTML file
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all source files where components are used
    "./node_modules/flowbite/**/*.js", // Flowbite library components
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
