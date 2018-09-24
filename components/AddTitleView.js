import React from 'react';
import { Text, View } from 'react-native';

import styles from "../styles";
import NavigateButton from './NavigateButton';
import TitleInput from "./TitleInput";

export default class AddTitleView extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          <View style={[styles.choiceButtonsContainer, {flexDirection:"column"}]}>
          <Text style={styles.question}>Add a title to your card deck</Text>
          <TitleInput multiline={false} />
          <NavigateButton {...this.props} title={"Add Title"} />
          </View>
        </View>
    )
  }
}