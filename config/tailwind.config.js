const defaultTheme = require('tailwindcss/defaultTheme');

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
        primary: '#A909ED',            // Main color
        'primary-hover': '#791BCC',    // Hover for primary color
        accent: '#DB1F18',             // Accent color
        'accent-hover': '#C21814',     // Hover for accent color
        neutral: '#746982',            // Neutral color (used for borders, general text)
        'neutral-hover': '#A909ED',    // Neutral hover color
        surface: '#F5F5F5',            // Light surface background color

        table: {
          header: '#F9FAFB',           // Background for table headers (light gray)
          row: '#FFFFFF',              // Background for table rows (white)
          'row-hover': '#F3F4F6',      // Hover background for rows (light gray)
          'button-neutral': '#E5E7EB',    // Background for "Show" button (light gray)
          'button-red': '#FECACA',  // Background for "Delete" button (light red)
          'text-red': '#B91C1C',    // Text color for "Delete" button (dark red)
          'button-red-hover': '#E34139',
          'button-neutral-hover': '#cac8c7'
        },

        // Notice and Alert Colors for success and warning messages
        notice: {
          DEFAULT: '#D1FAE5',          // Light green background for notices
          text: '#065F46',             // Dark green text for notices
          border: '#10B981'            // Green border for notices
        },
        alert: {
          DEFAULT: '#FEF3C7',          // Light yellow background for alerts
          text: '#92400E',             // Dark yellow text for alerts
          border: '#F59E0B'            // Yellow border for alerts
        },
        error: {
          DEFAULT: '#FEE2E2',          // Light red background for errors
          text: '#B91C1C',             // Dark red text for errors
          border: '#EF4444'            // Red border for errors
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
};
