module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }

  module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

