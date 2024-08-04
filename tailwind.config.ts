import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gray: 'var(--gray)',
        white: 'var(--white)',
        black: 'var(--black)',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        'playfair-display': ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
