/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f0',
          100: '#e8e3db',
          200: '#d4c7b5',
          300: '#bca589',
          400: '#a88b68',
          500: '#8b6f4d',
          600: '#6f5940',
          700: '#5a4735',
          800: '#4d3d2f',
          900: '#43362a',
        },
        forest: {
          50: '#f0f9f4',
          100: '#dcf1e3',
          200: '#bae3cb',
          300: '#8bcead',
          400: '#58b488',
          500: '#35996d',
          600: '#257a58',
          700: '#1e6248',
          800: '#1a4f3a',
          900: '#164130',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
