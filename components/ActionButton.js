import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles, {NON_PHOTO_BLUE, RASBERRY_PINK, FONTS} from "../styles";

export default class ActionButton extends React.Component {
  state = {
    style: null,
    name: null,
  }

  handlePress = (userResponse) => {
    const {data} = this.props
    console.log(userResponse)
    this.props.attemptCard(data, userResponse);
  }

  componentDidMount(){
    const [style, name] = (this.props.type === "correct") ? [{backgroundColor:NON_PHOTO_BLUE}, "ios-checkmark"]
              : (this.props.type === "incorrect") ? [{backgroundColor:RASBERRY_PINK}, "ios-close-outline"]
                : [null, null];

    this.setState({style});
    this.setState({name});
  }

  render(){
    const {type} = this.props;
    return(
      <TouchableOpacity style={[styles.actionButton, {...this.state.style}]} onPress={() => this.handlePress(type)}>
        <Ionicons name={this.state.name} color="white" size={40} />
      </TouchableOpacity>
    )
  }
}