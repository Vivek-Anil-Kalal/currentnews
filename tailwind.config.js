/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      truncateWords: {
        1: '1',
        2: '2',
        3:'3',
        // Add more options as needed
      },
    },
  },
  variants: {
    extend: {
      // Enable the utility class
      lineClamp: ['responsive', 'hover'],
    },
  },
  plugins: [],
}

