import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles, {SHADOWS, DAVYS_GREY} from "../styles";

export default class ListItem extends React.Component {
  render(){
    return(
      <TouchableOpacity>
        <View style={styles.listitem}>
          <Text>{this.props.item.title}</Text>
          <Ionicons name={"ios-arrow-round-forward"} color={DAVYS_GREY} size={28}/>
        </View>
      </TouchableOpacity>
    )
  }
}