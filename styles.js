import { StyleSheet } from 'react-native';


export const RASBERRY_PINK = "#E56399";
export const TUBMLEWEED = "D3A588";
export const ALMOND = "#ECE2D0";
export const PEARL_AQUA = "#7FD1B9";
export const NON_PHOTO_BLUE = "#90E5ED";
export const RAISIN_BLACK = "#2D2524";
export const DAVYS_GREY = "#5A5A5A";
export const WHITE = "#FFF";
export const RUSTY_RED = "#DB2B39";

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
    shadowRadius: 1.6
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
  buttonsContainer: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    margin:40,
    paddingLeft:40,
    paddingRight:40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card : {
    padding:20,
    minHeight:420,
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderRadius: 35,
    alignSelf:"center",
    width: "100%",
    position:"absolute",
    top:0,
    ...SHADOWS.vertical
  },
  endOfDeckContainer: {
    minHeight: 420,
    alignItems: "center",
    justifyContent: "center",
    padding:30
  },
  endOfDecktText: {
    color: DAVYS_GREY,
    ...FONTS.h2,
    textAlign: "center"
  },
  eyeButton: {
    alignSelf:"center",
    position:"absolute",
    bottom:30
  },
  question: {
    textAlign:"center",
    ...FONTS.h2
  },
  radialAnimationDot: {
    borderRadius:50,
    width:10,
    height:10
  }
});