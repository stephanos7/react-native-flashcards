import React, {shallowCompare} from 'react';
import { Text, View, Animated } from 'react-native';

import styles from "../styles";

export default class Card extends React.Component {
  state = {
    x: new Animated.Value(0),
  }

  componentDidUpdate() {
    this.props.item.attempted === true && 
    this.dropCardAnimation();
  }

  dropCardAnimation = () => {
    Animated.timing(
      this.state.x,
      {
        toValue: 400,
        duration:350
      }
    ).start();
  }

  render() {
    const {opacity} = this.state;
    const {index} = this.props;
    const {x} = this.state;
    const rotation = x.interpolate({
      inputRange: [0, 200],
      outputRange: ['0deg', '45deg']
    })
    return (
      <Animated.View style={[styles.card, {width:"100%", position:"absolute", top:0, left:x, transform: [{rotate: rotation}], alignSelf:"center", marginTop:(index+1)*8}]}>
        <Text style={styles.question}>{this.props.item.question}</Text>
      </Animated.View>
    );
  }
}
