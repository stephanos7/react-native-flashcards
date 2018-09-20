import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles, {SHADOWS, DAVYS_GREY} from "../styles";

export default class ListItem extends React.Component {
  render(){
    const {item, navigation, name} = this.props;
    return(
      <TouchableOpacity onPress={() => navigation.navigate("Start")}>
        <View style={styles.listitem}>
          <Text>{item ? item.title : null}</Text>
          <Ionicons name={"ios-arrow-round-forward"} color={DAVYS_GREY} size={28}/>
        </View>
      </TouchableOpacity>
    )
  }
}