import React from 'react';
import { Text, View } from 'react-native';

import styles from "./styles";
import Card from "./components/Card";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card/>
      </View>
    );
  }
}
