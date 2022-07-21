const defaultTheme = {
  fonts: {
    main: 'Libre Franklin, sans-serif'
  },
  colors: {
    primary: {
      light: '#006466',
      main: '#0b525b',
      dark: '#1b3a4b'
    },
    background: {
      main: '#f5f3f4'
    },
    text: {
      light: '#f5f3f4',
      main: '#011627'
    }
  },
  breakpoints: {
    // * 320px
    xs: 'only screen and (max-width: 20em)',
    // * 600px
    sm: 'only screen and (max-width: 37.5em)',
    // * 800px
    md: 'only screen and (max-width: 50em)',
    // * 1024px
    lg: 'only screen and (max-width: 64em)'
  }
};

export default defaultTheme;
