import React from 'react';
import { Text, View } from 'react-native';

import styles from "../styles";
import FONTS from "../styles";
import {COLORS} from "../styles";


export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.question}>Una Carta</Text>
      </View>
    );
  }
}
