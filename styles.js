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
  },
  h3: {
    fontSize: 24
  },
  h4: {
    fontSize: 18
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
  },
  wide: {
    shadowColor: DAVYS_GREY,
    shadowOffset: {
      width: 8, height: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 12
  },
  halo: {
    shadowColor: PEARL_AQUA,
    shadowOffset: {
      width: 0, height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 10
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
  answer:{
    paddingTop:20,
    paddingBottom:20,
    color: WHITE,
    textAlign: "center",
    ...FONTS.h2
  },
  actionButtonsContainer: {
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
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
    display:"flex",
    padding:20,
    minHeight:350,
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderRadius: 35,
    alignSelf:"center",
    width: "100%",
    position:"absolute",
    top:0,
    ...SHADOWS.vertical
  },
  choiceButtonsContainer : {
    display:"flex",
    alignItems: "center",
    margin:40,
    paddingLeft:40,
    paddingRight:40
  },
  choiceButton : {
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:WHITE,
    minWidth: 150,
    height:50,
    marginBottom:30,
    ...SHADOWS.wide
  },
  counter: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: WHITE,
    borderRadius:50,
    height:50,
    width:50,
    paddingTop:1,
    ...SHADOWS.halo
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
  listitem: {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:WHITE,
    padding:25,
    marginBottom:30,
    ...SHADOWS.wide
  },
  question: {
    textAlign: "center",
    ...FONTS.h2
  },
  radialAnimationDot: {
    borderRadius:50,
    width:10,
    height:10
  },
  textInput: {
    padding:15,
    color:DAVYS_GREY,
    textAlign:"center",
    width: 250,
    marginBottom:30,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: PEARL_AQUA,
    ...FONTS.h3
  }
});