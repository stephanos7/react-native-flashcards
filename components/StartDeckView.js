import React from 'react';
import {View, TouchableOpacity } from 'react-native';

import styles from "../styles";
import NavigateButton from './NavigateButton';

export default class StartDeckView extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          <View style={styles.choiceButtonsContainer}>
            <NavigateButton {...this.props} title={"Add New Card"} />
            <NavigateButton {...this.props} title={"Start Deck"} />
          </View>
        </View>
    )
  }
}