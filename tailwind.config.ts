import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      main: {
        primary: '#004BFF',
        secondary: '#22EF92',
        semiblue: '#F4F7FF',
        white: '#FFFFFF',
        semidark: '#424D52',
        dark: '#141414',
        gray: '#CCC',
        red: '#FF3232'
      }
    },
    extend: {
      backgroundImage: {},
      animation: {
        spin: 'spin 1.2s linear infinite'
      },
      keyframes: (theme) => ({
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      })
    }
  },
  plugins: []
}
export default config
