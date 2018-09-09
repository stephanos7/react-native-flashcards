import React, {shallowCompare} from 'react';
import { Text, View, Animated } from 'react-native';

import styles from "../styles";

export default class Card extends React.Component {
  state = {
    y: new Animated.Value(0),
  }

  componentDidUpdate() {
    this.props.item.attempted === true && 
    this.dropCardAnimation();
  }

  dropCardAnimation = () => {
    Animated.timing(
      this.state.y,
      {
        toValue: 500,
        duration:2000
      }
    ).start();
  }

  render() {
    const {opacity} = this.state;
    const {index} = this.props;
    const {y} = this.state;
    return (
      <Animated.View style={[styles.card, {width:"100%", position:"absolute", top:y, alignSelf:"center", marginTop:(index+1)*8}]}>
        <Text style={styles.question}>{this.props.item.question}</Text>
        <Text>{JSON.stringify(this.props)}</Text>
      </Animated.View>
    );
  }
}
