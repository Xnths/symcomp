import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        courier: 'Courier Prime',
        mont: 'Montserrat',
        dm: 'DM Sans',
      },
      boxShadow: {
        solid: '5px 5px 0 0 black',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#003049',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#FF006E',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: '#FFBE0C',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        bc: {
          white: {
            DEFAULT: '#F1F1F1',
          },
          caramel: {
            DEFAULT: '#C0771B',
          },
          brown: {
            DEFAULT: '#47160F',
          },
          black: {
            DEFAULT: '#1E1E1E',
          },
        },
        'sc-2025': {
          primary: {
            DEFAULT: '#ffbe0b',
          },
          secondary: {
            DEFAULT: '#b25cca',
          },
          background: {
            DEFAULT: '#149d9c',
          },
          foreground: {
            DEFAULT: '#fefefe',
          },
          contrast: {
            DEFAULT: '#003049',
          },
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
} satisfies Config

export default config
