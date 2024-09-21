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
            keyframes :{
        toright:{
          '0%':{transform:'translateX(0px) ', opacity:'1'},
          '10%':{transform:'translateX(5px) ', opacity:'0.9'},
          '20%':{transform:'translateX(10px) ', opacity:'0.8'},
          '30%':{transform:'translateX(15px) ', opacity:'0.7'},
          '40%':{transform:'translateX(20px) ', opacity:'0.6'},
          '50%':{transform:'translateX(25px) ', opacity:'0.5'},
          '60%':{transform:'translateX(30px) ', opacity:'0.4'},
          '70%':{transform:'translateX(35px) ', opacity:'0.3'},
          '80%':{transform:'translateX(40px) ', opacity:'0.2'},
          '90%':{transform:'translateX(45px) ', opacity:'0.1'},
          '100%':{transform:'translateX(50px) ', opacity:'0'},
        },
        fadeup:{
          '0%':{transform:'translateY(0px) scale(1)', opacity:'0.0'},
          '25%':{transform:'translateY(5px) scale(1.2)', opacity:'0.2'},
          '50%':{transform:'translateY(10px) scale(1.4)', opacity:'0.4'},
          '75%':{transform:'translateY(15px) scale(1.6)', opacity:'0.6'},
          '100%':{transform:'translateY(20px) scale(1.8)', opacity:'0'},
        },
      },

      
      animation: {
        toright: 'toright 0.8s ease ',
        fadeup: 'fadeup 0.5s ease  ',
      }
    },
  },
  plugins: [],
}

