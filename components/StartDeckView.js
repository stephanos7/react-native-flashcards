import React from 'react';
import {View, TouchableOpacity } from 'react-native';

import styles from "../styles";
import ChoiceButton from './ChoiceButton';

export default class StartDeckView extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          <View style={styles.choiceButtonsContainer}>
            <ChoiceButton {...this.props} title={"Add New Card"} />
            <ChoiceButton {...this.props} title={"Start Deck"} />
          </View>
        </View>
    )
  }
}