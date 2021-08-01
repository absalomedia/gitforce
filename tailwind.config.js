const windmill = require('@windmill/react-ui/config');
module.exports = windmill({
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: theme => ({
      'trail': "url('/public/hiking.jpg')"
     })
  },
  variants: {
    extend: {
     accessibility: ['hover', 'active'],
    }
  },
  plugins: [],
});