import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import {_COLORS} from "../styles";

export default class ActionButton extends React.Component {
  render(){
    const type = this.props;
    return(
      <TouchableOpacity style={{alignItems:"center", justifyContent:"center" ,backgroundColor:_COLORS.PEARL_AQUA,borderRadius:50, width: 60, height:60}}>
        <Ionicons name="ios-checkmark" color="white" size={48} />
      </TouchableOpacity>
    )
  }
}