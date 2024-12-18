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
        light: "url('/background_extended.gif')",
        woods: "url('/woods.webp')"
      }
    },
    fontFamily: {
      simonetta: ['"Simonetta"', 'serif'],
      bankGothic: ['"BankGothic"','sans-serif'],
      courier: ['"Courier Prime"']
    }
  },
  plugins: [],
};
