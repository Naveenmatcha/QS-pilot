/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        qs: "14px"
      },
      colors: {
        qsBlue: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#1E88E5',
          600: '#1976D2',
          700: '#1565C0',
        },
        qsOrange: {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF6F00'
        },
        qsGray: {
          light: '#F5F8FF',
          border: '#E0E0E0',
          text: '#4A4A4A'
        }
      },
      boxShadow: {
        qsm: '0 2px 8px rgba(16,24,40,0.06)'
      }
    }
  },
  plugins: []
}
