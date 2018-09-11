import React from 'react';
import { Text, View, Animated } from 'react-native';

import styles from "../styles";
import {calcPercentage} from "../utils/helpers";

export default class Counter extends React.Component {
  render(){
    const {score, total} = this.props;
    const percentageScore = calcPercentage(score,total);
    return(
      <View style={styles.counter}>
        <Text>{percentageScore}%</Text>
      </View>
    )
  }
}