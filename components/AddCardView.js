import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from "../styles";
import ChoiceButton from './ChoiceButton';

export default class AddCardView extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          <View style={[styles.choiceButtonsContainer, {flexDirection:"row"}]}>
          <Text>newww</Text>
            <ChoiceButton {...this.props} title={"True"} />
            <Text>{JSON.stringify(this.props)}</Text>
          </View>
        </View>
    )
  }
}