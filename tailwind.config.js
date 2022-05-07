const colors = require('./src/constants/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['DMSans_400Regular', 'ui-sans-serif', 'sans-serif'],
      'sans-md': ['DMSans_500Medium', 'ui-sans-serif', 'sans-serif'],
      'sans-bold': ['DMSans_700Bold', 'ui-sans-serif', 'sans-serif'],
      serif: ['PlayfairDisplay_400Regular', 'ui-serif', 'serif'],
      'serif-md': ['PlayfairDisplay_500Medium', 'ui-serif', 'serif'],
      'serif-bold': ['PlayfairDisplay_700Bold', 'ui-serif', 'serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      zIndex: {
        999: 999,
      },
      fontSize: (theme) => ({
        ...theme('spacing'),
      }),
      lineHeight: {
        4: '1rem',
        4.5: '1.125rem',
        5: '1.25rem',
        5.5: '1.375rem',
        6: '1.5rem',
        6.5: '1.625rem',
        7.5: '2rem',
        8: '32px',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        13: '3.25rem',
        18: '4.5rem',
        'percent-100': '100%',
        'percent-120': '120%',
        'percent-130': '130%',
      },
      minHeight: {
        14: '3.5rem',
        15: '3.75rem',
        94: '23.5rem',
      },
      maxWidth: {
        15: '3.75rem',
        40: '10rem',
        51.5: '12.875rem',
        62.5: '15.625rem',
        65: '16.25rem',
        70: '17.5rem',
        74: '18.5rem',
        83.75: '20.938rem',
        85: '21.25rem',
        88.75: '22.188rem',
        100: '25rem',
        175: '43.75rem',
        270: '67.5rem',
      },
      minWidth: {
        2: '0.5rem',
        8: '2rem',
        14: '3.5rem',
        16: '4rem',
        17.5: '4.375rem',
        21: '5.25rem',
        32.25: '8.0625rem',
        36.5: '9.125rem',
        62.5: '15.625rem',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      },
    },
  },
  variants: {
    extend: {},
  },
}
