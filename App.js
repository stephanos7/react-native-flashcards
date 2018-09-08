import React from 'react';
import { Text, View } from 'react-native';

import styles from "./styles";
import Card from "./components/Card";
import ActionButton from './components/ActionButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card/>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:30}}>
          <ActionButton type="incorrect" />
          <ActionButton type="correct" />
        </View>
      </View>
    );
  }
}
