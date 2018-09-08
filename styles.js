import { StyleSheet } from 'react-native';


export const RASBERRY_PINK = "#E56399";
export const TUBMLEWEED = "D3A588";
export const ALMOND = "#ECE2D0";
export const PEARL_AQUA = "#7FD1B9";
export const RAISIN_BLACK = "#2D2524";
export const DAVYS_GREY = "#5A5A5A";
export const WHITE = "#FFF";

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
    shadowColor: DAVYS_GREY,
    shadowOffset: {
      width: 0, height: -0.3
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.3
  }
}

export default StyleSheet.create({
  actionButton:{
    alignItems:"center",
    justifyContent:"center",
    borderRadius:50,
    width:60,
    height:60,
    paddingTop:5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card : {
    minHeight:420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderRadius: 35,
    ...SHADOWS.vertical
  },
  question:{
    color: DAVYS_GREY,
    ...FONTS.h1
  },
});