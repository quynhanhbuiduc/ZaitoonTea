/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDF4',   // Very soft mint tint
          100: '#DCFCE7',  // Light herbal green
          200: '#BBF7D0',  // Soft leaf green
          300: '#86EFAC',  // Fresh sprout
          400: '#4ADE80',  // Vibrant leaf
          500: '#22C55E',  // Bright pure green (alive but balanced)
          600: '#16A34A',  // Main brand rich green
          700: '#15803D',  // Deep leaf
          800: '#166534',  // Evergreen
          900: '#14532D',  // Deep forest
          950: '#052E16',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Crisp jewel green
          600: '#059669', // Sophisticated primary
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'glow-lg': '0 0 45px -5px rgba(16, 185, 129, 0.35)',
        'card-clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 10px 30px -5px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(5, 150, 105, 0.12), 0 0 0 1px rgba(16, 185, 129, 0.2)',
        'floating': '0 20px 30px -10px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
