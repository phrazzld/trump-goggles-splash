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
        'display': ['var(--font-playfair)'],
        'body': ['var(--font-inter)'],
        'accent': ['var(--font-courier)'],
      },
      colors: {
        'retro': {
          'red': '#B91C1C',
          'blue': '#1E3A8A',
          'cream': '#FEFBF3',
          'gold': '#D97706',
        }
      },
      boxShadow: {
        'vintage': '4px 4px 0px 0px rgba(0,0,0,0.1)',
      }
    }
  },
  plugins: [],
}

export default config