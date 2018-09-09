import React, {shallowCompare} from 'react';
import { Text, View, Animated } from 'react-native';

import styles,{DAVYS_GREY,PEARL_AQUA} from "../styles";

export default class Card extends React.Component {

  componentWillMount(){
    this.x = new Animated.Value(0);
    this.dotOpacity = new Animated.Value(0);
    this.dotScale = new Animated.Value(1);
  }

  componentDidUpdate() {
    this.props.item.attempted !== "" && 
    this.swipeCardAnimation();
  }

  determineSwipeConfig = (attempt, startValue, answer) => {
    return Animated.timing(
      startValue,
      {
        toValue: attempt === "correct" ? 400 : attempt === "incorrect" ? -400 : null,
        duration:attempt === answer ? 500 : 3000
      }
    )
  }

  swipeCardAnimation = () => {
    const { attempted, answer } = this.props.item;
    const sequence = [
      this.determineSwipeConfig(attempted, this.x, answer),
      Animated.timing(
        this.dotOpacity,
        {
          toValue: 1,
          duration:100
        }
      ),
      Animated.spring(
        this.dotScale,
        {
          toValue:60,
          tension:50,
          duration:2000
        }
      )
    ];
    Animated.parallel(sequence).start(() => this.props.removeAttemptedCard());
  }

  hideOverflow = () => {
    return {overflow:"hidden"}
  }

  render() {
    const {index, item} = this.props;
    const rotation = this.x.interpolate({
      inputRange: [0, 200],
      outputRange: ['0deg', '45deg']
    })
    return (
      <Animated.View style={[styles.card, item.attempted !== "" && this.hideOverflow(), {left:this.x, transform: [{rotate: rotation}], marginTop:(index+1)*8}]}>
        <Text style={[styles.question, item.attempted !== "" ? {color:"white",zIndex:2}:{color: DAVYS_GREY}]}>{this.props.item.question}</Text>
        <Animated.View style={{transform:[{scale:this.dotScale}],borderRadius:50,width:10,height:10,backgroundColor:PEARL_AQUA, opacity:this.dotOpacity}}/>
      </Animated.View>
    );
  }
}
