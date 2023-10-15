/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlue": "hsl(235, 46%, 20%)",
        "paleBlue": "hsl(236, 100%, 87%)",
        "activeBlue": "hsl(236, 41%, 34%)",
        "customBlue": "hsl(246, 80%, 60%)",
      }
    },
  },
  plugins: [],
}

