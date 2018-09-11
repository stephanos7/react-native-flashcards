import React from 'react';
import { Text, View, Animated } from 'react-native';

import styles from "../styles";

export default class Counter extends React.Component {
  render(){
    const {score} = this.props;
    return(
      <View style={styles.counter}>
        <Text>{score}%</Text>
      </View>
    )
  }
}