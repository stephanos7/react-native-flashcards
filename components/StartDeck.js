import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles, {SHADOWS, DAVYS_GREY} from "../styles";
import ChoiceButton from './ChoiceButton';

export default class StartDeck extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          <View style={styles.choiceButtonsContainer}>
            <ChoiceButton title={"Add New Card"} />
            <ChoiceButton title={"Start Deck"} />
            <Text>{JSON.stringify(this.props)}</Text>
          </View>
        </View>
    )
  }
}