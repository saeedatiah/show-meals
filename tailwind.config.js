/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {

      colors: { 
                'custom-1': '#1D1A39', 
                'custom-2': '#451952', 
                'custom-3': '#662549', 
                'custom-4': '#AE445A', 
                'custom-5': '#F39F5A', 
                'custom-6': '#E8BCB9', 
            }, 
    },
  },
  plugins: [],
}

