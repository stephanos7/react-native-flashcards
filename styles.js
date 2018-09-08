import { StyleSheet } from 'react-native';

export const _COLORS = {
  RASBERRY_PINK : "E56399",
  TUBMLEWEED: "D3A588",
  ALMOND: "#ECE2D0",
  PEARL_AQUA: "#7FD1B9",
  RAISIN_BLACK: "#2D2524",
  DAVYS_GREY: "#5A5A5A",
  WHITE: "#FFF"
}

export const LAYOUTS = {
  
}

export const FONTS = {
  h1: {
    fontSize: 32
  },
  h2: {
    fontSize: 28
  }
}

export const SHADOWS = {
  vertical: {
    shadowColor: _COLORS.RAISIN_BLACK,
    shadowOffset: {
      width: 0, height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 4
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
    backgroundColor: _COLORS.WHITE,
    borderRadius: 35,
    marginBottom: 35,
    ...SHADOWS.vertical
  },
  question:{
    color: _COLORS.DAVYS_GREY,
    ...FONTS.h1
  },
});