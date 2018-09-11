import React from 'react';
import { Text, View , FlatList } from 'react-native';

import styles from "../styles";
import ListItem from "./ListItem";

export default class List extends React.Component {
  state = {
    decks:[{id:1, title:"apples"},{id:2, title:"lemons"},{id:3, title:"oranges"},{id:4, title:"peaches"}]
  }

  _renderItem = (item) => <ListItem {...item} />

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          style={{padding:30}}
          data={this.state.decks}
          renderItem={this._renderItem}
          keyExtractor={(item,index) => index.toString()}/>
      </View>
    )
  }
}