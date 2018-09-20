import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

import styles from "../styles";

export default class ChoiceButton extends React.Component {
  handlePress = () => {

  }

  render(){
    const {title} = this.props;
    return(
      <TouchableOpacity style={styles.choiceButton} onPress={() => this.handlePress()} >
        <Text>{title}</Text>
      </TouchableOpacity>
    )
  }
}