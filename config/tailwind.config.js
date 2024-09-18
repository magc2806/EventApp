const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#791BCC',       // Main color
        accent: '#DB1F18',        // Accent   color
        neutral: '#B2ADB8',       // Neutral color
        surface: '#F5F5F5',
        notice: {                 // Notice (success) color scheme
          DEFAULT: '#D1FAE5',     // Light green background
          text: '#065F46',        // Dark green text
          border: '#10B981',      // Green border
        },
        alert: {                  // Alert (warning) color scheme
          DEFAULT: '#FEF3C7',     // Light yellow background
          text: '#92400E',        // Dark yellow text
          border: '#F59E0B',      // Yellow border
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
