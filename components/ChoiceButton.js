import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

import styles from "../styles";

export default class ChoiceButton extends React.Component {
  handlePress = (title) => {
    const routeToFollow = this.determineRoute(title);
    this.props.navigation.navigate(routeToFollow);
  }

  determineRoute = (buttonTitle) => {
    if(buttonTitle === "Add New Card"){
      return "Home"
    }
    if(buttonTitle === "Start Deck"){
      return "DeckView";
    }
  }

  render(){
    const {title} = this.props;
    return(
      <TouchableOpacity style={styles.choiceButton} onPress={() => this.handlePress(title)} >
        <Text>{title}</Text>
      </TouchableOpacity>
    )
  }
}