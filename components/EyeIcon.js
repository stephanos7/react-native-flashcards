import React from 'react';
import { Ionicons } from "@expo/vector-icons";

import {PEARL_AQUA} from "../styles";

export default class EyeIcon extends React.Component {
  render(){
    return(
      <Ionicons name={"ios-eye"} color={PEARL_AQUA} size={48} />
    )
  }
}