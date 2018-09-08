import React from 'react';
import { Text, View } from 'react-native';

import styles from "../styles";

export default class Card extends React.Component {
  render() {
    const {index} = this.props
    return (
      <View style={[styles.card, {width:"100%", alignSelf:"center", position:"absolute", top:0, marginTop:(index+1)*8}]}>
        <Text style={styles.question}>{this.props.item}</Text>
      </View>
    );
  }
}
