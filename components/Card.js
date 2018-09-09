import React, {shallowCompare} from 'react';
import { Text, View, Animated } from 'react-native';

import styles from "../styles";

export default class Card extends React.Component {

  componentWillMount(){
    this.x = new Animated.Value(0);
    this.dotOpacity = new Animated.Value(0);
  }

  componentDidUpdate() {
    this.props.item.attempted !== "" && 
    this.swipeCardAnimation();
  }

  determineSwipeDirection = (attempt, startValue) => {
    return Animated.timing(
      startValue,
      {
        toValue: attempt === "correct" ? 400 : attempt === "incorrect" ? -400 : null,
        duration:350
      }
    )
  }

  // .start((

  swipeCardAnimation = () => {
    const { attempted } = this.props.item;
    const sequence = [
      this.determineSwipeDirection(attempted, this.x),
      Animated.timing(
        this.dotOpacity,
        {
          toValue: 1,
          duration:350
        }
      )
    ];
    Animated.parallel(sequence).start(() => this.props.removeAttemptedCard());
  }

  render() {
    const {index} = this.props;
    const rotation = this.x.interpolate({
      inputRange: [0, 200],
      outputRange: ['0deg', '45deg']
    })
    return (
      <Animated.View style={[styles.card, {alignSelf:"center", width: "100%", position:"absolute", top:0, left:this.x, transform: [{rotate: rotation}], marginTop:(index+1)*8}]}>
        <Text style={styles.question}>{this.props.item.question}</Text>
        <Animated.View style={{width:50,height:50,backgroundColor:"grey", opacity:this.dotOpacity}}/>
      </Animated.View>
    );
  }
}
