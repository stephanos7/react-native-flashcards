import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles, {PEARL_AQUA, RASBERRY_PINK, FONTS} from "../styles";

export default class ActionButton extends React.Component {
  state = {
    style: null,
    name: null,
  }

  handlePress = () => {
    this.props.markCardAttempted(this.props);
  }

  componentDidMount(){
    const [style, name] = (this.props.type === "correct") ? [{backgroundColor:PEARL_AQUA}, "ios-checkmark"]
              : (this.props.type === "incorrect") ? [{backgroundColor:RASBERRY_PINK}, "ios-close-outline"]
                : [null, null];

    this.setState({style});
    this.setState({name});
  }

  render(){
    return(
      <TouchableOpacity style={[styles.actionButton, {...this.state.style}]} onPress={this.handlePress}>
        <Ionicons name={this.state.name} color="white" size={40} />
      </TouchableOpacity>
    )
  }
}