import React from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles,{DAVYS_GREY,PEARL_AQUA} from "../styles";

export default class EyeIcon extends React.Component {
  render(){
    return(
        <TouchableOpacity style={{alignSelf:"center", position:"absolute",bottom:30}}>
            <Ionicons name={"ios-eye"} color={PEARL_AQUA} size={48} />
        </TouchableOpacity>
    )
  }
}