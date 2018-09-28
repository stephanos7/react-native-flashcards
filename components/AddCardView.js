import React from 'react';
import { Text, View } from 'react-native';

import styles from "../styles";
import NavigateButton from './NavigateButton';
import TitleInput from "./TitleInput";

export default class AddCardView extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          <View style={[styles.choiceButtonsContainer, {flexDirection:"column"}]}>
          <Text style={styles.question}>Add a fact on your Card</Text>
          <TitleInput multiline={true} />
          <NavigateButton {...this.props} title={"Add Card"} />
          </View>
        </View>
    )
  }
}