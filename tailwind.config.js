/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        woods: "url('/bosque2.jpg')"
      }
    },
    fontFamily: {
      simonetta: ['"Simonetta"', 'serif'],
      bankGothic: ['"BankGothic"','sans-serif']
    }
  },
  plugins: [],
};
