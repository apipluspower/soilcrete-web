const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#014BAA',
      'secondary': '#FFFFFF',
      'tricondary': '#CE001E',
      'primary-onHover': '#013C88',
      'primary-onPressed': '#012E68',
      'tricondary-onHover': '#ab0019',
      'tricondary-onPressed': '#910015',
      'stat': '#1373EF',
      'black': {
        '1': '#000000',
        '2': '#1D1D1D',
        '3': '#282828',
      },
      'grey': {
        '1': '#333333',
        '2': '#4F4F4F',
        '3': '#828282',
        '4': '#BDBDBD',
        '5': '#E0E0E0',
      }
    }),
    extend: {
      fontFamily: {
        'display': ['Kanit', 'sans-serif'],
      },
      borderRadius: {
        'button': '4px',
      },
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
      },
      width: {
        'sm': '90px'
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
      },
      margin: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
      },
      colors: {
        'primary': '#014BAA',
        'secondary': '#FFFFFF',
        'tricondary': '#CE001E',
        'info': '#2F80ED',
        'success': '#27AE60',
        'warning': '#E2B93B',
        'error': '#EB5757',
        'black': {
          '1': '#000000',
          '2': '#1D1D1D',
          '3': '#282828',
        },
        'grey': {
          '1': '#333333',
          '2': '#4F4F4F',
          '3': '#828282',
          '4': '#BDBDBD',
          '5': '#E0E0E0',
        },
        fontSize: {
          sm: ['14px', '20px'],
          base: ['16px', '24px'],
          lg: ['20px', '28px'],
          xl: ['24px', '32px'],
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
