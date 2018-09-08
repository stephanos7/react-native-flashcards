import { StyleSheet } from 'react-native';

export const LAYOUTS = {
  
}

export const FONTS = {
  h1: {
    fontSize: 32
  }
}

export const COLORS = {
  RASBERRY_PINK : "E56399",
  TUBMLEWEED: "D3A588",
  ALMOND: "#ECE2D0",
  PEARL_AQUA: "#7FD1B9",
  RAISIN_BLACK: "#2D2524",
  DAVYS_GREY: "#5A5A5A",
  WHITE: "#FFF"
}

export const SHADOWS = {
  vertical: {
    shadowColor: COLORS.RAISIN_BLACK,
    shadowOffset: {
      width: 0, height: 6
    },
    shadowOpacity: 0.4,
    shadowRadius: 6
  }
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20
  },
  card : {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 35,
    ...SHADOWS.vertical
  },
  question:{
    color: COLORS.DAVYS_GREY,
    ...FONTS.h1
  }
});