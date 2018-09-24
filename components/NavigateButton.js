import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

import styles from "../styles";

export default class NavigateButton extends React.Component {
  handlePress = (title) => {
    const routeToFollow = this.determineRoute(title);
    console.log(routeToFollow)
    this.props.navigation.navigate(routeToFollow)
  }

  determineRoute = (buttonTitle) => {
    if(buttonTitle === "Add New Card"){
      return "CreateNew"
    }
    if(buttonTitle === "Start Deck"){
      return "DeckView";
    }
    if(buttonTitle === "Add Title"){
      return "AddCard";
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