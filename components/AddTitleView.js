import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';

import styles from "../styles";
import NavigateButton from './NavigateButton';
import TitleInput from "./TitleInput";
import { saveTitle, getAllKeys } from "../helpers/AsyncStorage";

export default class AddTitleView extends React.Component {
  state = {
    text : ""
  }

  handlePress = () => {
    const title = this.state.text;
    saveTitle(title)
  }

  showKeys = () => {
    getAllKeys();
  }

  render(){
    return(
        <View style={styles.container}>
          <View style={[styles.choiceButtonsContainer, {flexDirection:"column"}]}>
          <Text style={styles.question}>Add a title to your card deck</Text>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text} />
          <Button
              title={"Add Title"}
              onPress={this.handlePress} />
          <Button
              title={"Show Keys"}
              onPress={this.showKeys} />
          </View>
        </View>
    )
  }
}