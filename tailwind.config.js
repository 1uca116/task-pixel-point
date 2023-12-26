const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      robotoLight: ['Roboto-Light', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      poppinsExtraLight: ['Poppins-ExtraLight', 'sans-serif'],
      sans: ['', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: 'rgb(14, 10, 15)',
      white: 'rgb(255, 255, 255)',
      primary: {
        1: 'rgb(153, 102, 255)',
        2: 'rgb(203, 106, 251)',
      },
      secondary: {
        1: 'rgb(64, 191, 170)',
        2: 'rgb(77, 102, 229)',
        3: 'rgb(247, 225, 110)',
        4: 'rgb(240, 66, 66)',
      },
      grey: {
        94: 'rgb(240, 238, 241)',
        98: 'rgb(250, 249, 250)',
      },
    }),
    boxShadow: {
      medium: '200px 200px 200px',
      large: '400px 400px 400px',
    },
    blur: {
      medium: '200px',
      large: '400px',
    },
    borderRadius: {
      large: '40px',
      full: 9999,
    },
    fontSize: {
      sm: ['14px', '20px'],
      common: [
        '15px',
        {
          lineHeight: '15px',
          letterSpacing: '0.3px',
          fontWeight: '400',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '20px',
          letterSpacing: '0.32px',
          fontWeight: '300',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight: '27px',
          letterSpacing: '0.36px',
          fontWeight: '300',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight: '30px',
          letterSpacing: '0.4px',
          fontWeight: '300',
        },
      ],
      '2xl': [
        '24px',
        {
          lineHeight: '27px',
          letterSpacing: '0.48px',
          fontWeight: '400',
        },
      ],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', 1],
      '6xl': ['60px', 1],
      '7xl': [
        '76px',
        {
          lineHeight: '86px',
          letterSpacing: '-1.52px',
          fontWeight: '400',
        },
      ],
      '8xl': [
        '136px',
        {
          lineHeight: '136px',
          letterSpacing: '-5.44px',
          fontWeight: '275',
        },
      ],
    },
    screens: {
      '2xl': '1536px',
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xs: '475px',
      '2xs': '414px',
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
