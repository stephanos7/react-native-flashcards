import React from 'react';
import { Text, View } from 'react-native';

import styles, { PEARL_AQUA } from "../styles";
import {calcPercentage} from "../utils/helpers";

export default class Counter extends React.Component {
  render(){
    const {score, total} = this.props;
    const percentageScore = calcPercentage(score,total);
    return(
      <View style={styles.counter}>
        <Text style={{color:PEARL_AQUA}}>{percentageScore}%</Text>
      </View>
    )
  }
}