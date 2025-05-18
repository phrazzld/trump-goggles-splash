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
        // Primary semantic names
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
        
        // Compatibility with existing components
        'playfair-display': ['var(--font-playfair)'],
        'inter': ['var(--font-inter)'],
        'courier-prime': ['var(--font-courier)'],
        'playfair': ['var(--font-playfair)'],
        'courier': ['var(--font-courier)'],
        'accent': ['var(--font-courier)', 'monospace'],
      },
      colors: {
        'retro': {
          'red': '#B91C1C',
          'blue': '#1E3A8A',
          'cream': '#FEFBF3',
          'gold': '#D97706',
          'black': '#18181B',
        }
      },
      boxShadow: {
        'vintage': '4px 4px 0px 0px rgba(0,0,0,0.1)',
        'retro': '4px 4px 0px 0px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'texture-paper': 'repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0, 0, 0, 0.01) 2px,rgba(0, 0, 0, 0.01) 4px)',
      }
    }
  },
  plugins: [],
}

export default config