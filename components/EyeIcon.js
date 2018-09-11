import React from 'react';
import { Ionicons } from "@expo/vector-icons";

import {PEARL_AQUA} from "../styles";

export default class EyeIcon extends React.Component {
  render(){
    const {showingAnswer} = this.props;
    const color = showingAnswer ? "white" : PEARL_AQUA;
    return(
      <Ionicons name={"ios-eye"} color={color} size={48} />
    )
  }
}