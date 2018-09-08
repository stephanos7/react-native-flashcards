import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles, {PEARL_AQUA} from "../styles";

export default class ActionButton extends React.Component {
  render(){
    const type = this.props;
    return(
      <TouchableOpacity style={[styles.actionButton, {backgroundColor:PEARL_AQUA}]}>
        <Ionicons name="ios-checkmark" color="white" size={48} />
      </TouchableOpacity>
    )
  }
}