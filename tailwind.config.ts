import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        clashDisplay: ['var(--font-clash-display)'],
        unicaOne: ['var(--font-unica-one)'],
        inter: ['var(--font-inter)'],
      },
      colors: (theme) => ({
        'gradient-primary': `linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)`,
        'home':'#150E28',
        'primary': '#FFF',
        'secondary': '#D434FE',
        'accent': '#903AFF',
      })
    },
  },
  plugins: [],
}
export default config
