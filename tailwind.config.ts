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
      colors: {
        'home':'#150E28',
        'primary': '#FFF',
        'secondary': '#D434FE',
        'accent': '#903AFF',
      },
      width: {
        '9/10': '90%',
      }
    },
  },
  plugins: [],
}
export default config
