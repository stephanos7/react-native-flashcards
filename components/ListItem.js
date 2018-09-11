import React from 'react';
import { Text, View } from 'react-native';

import styles from "../styles";

export default class ListItem extends React.Component {
  render(){
    return(
      <View>
        <Text>{this.props.item.title}</Text>
      </View>
    )
  }
}