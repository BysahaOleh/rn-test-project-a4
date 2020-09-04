const colors = {
  primary: '#02C5B4',
  primaryDisabled: '#B6DDD5',
  primaryLight: '#EFF7F6',
  contrast: '#68A4B4',
  text: '#424040',
  textLight: '#8F8F8F',
  textLight2: '#949494',
  textLight3: '#A4A4A4',
  peach: '#FCDBC3',
  greyLight: '#F2F2F2',
};

export const theme = {
  colors,
  typography: {
    base: {
      fontFamily: 'Geomanist-Regular',
      color: colors.text,
    },
    weight: {
      black: {
        fontFamily: 'Geomanist-Black',
      },
      bold: {
        fontFamily: 'Geomanist-Bold',
      },
      book: {
        fontFamily: 'Geomanist-Book',
      },
      medium: {
        fontFamily: 'Geomanist-Medium',
      },
      regular: {
        fontFamily: 'Geomanist-Regular',
      },
      light: {
        fontFamily: 'Geomanist-Light',
      },
    },
  },
};
