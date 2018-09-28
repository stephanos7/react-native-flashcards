import React from 'react';
import { TextInput } from 'react-native';

import styles, { PEARL_AQUA } from "../styles";

export default class TitleInput extends React.Component {
  state = {
    text : ""
  }

  render(){
    const {multiline} = this.props;
    return(
      <TextInput
      style={styles.textInput}
      autoFocus={true}
      multiline={multiline ? true : false}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text} />
    )
  }
}


