import React from 'react';
import { Text, View, Animated } from 'react-native';

import styles from "../styles";

export default class Card extends React.Component {
  state = {

  }

  render() {
    const {index} = this.props;
    const {y} = this.state;
    return (
      <View style={[styles.card, {width:"100%", alignSelf:"center", position:"absolute", top:0, marginTop:(index+1)*8}]}>
        <Text style={styles.question}>{this.props.item.question}</Text>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}
