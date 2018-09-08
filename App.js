import React from 'react';
import { Text, View , FlatList} from 'react-native';

import styles from "./styles";
import Card from "./components/Card";
import ActionButton from './components/ActionButton';

export default class App extends React.Component {
  state = {
    data:["apple","orange","lemon"]
  }

  popArray = () => {
    const copyOfData = [...this.state.data];
    copyOfData.pop();
    this.setState(() => ({data:copyOfData}));
  }

  _renderItem = (item) => <Card {...item}/>

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            style={{padding:30}}
            data={this.state.data.reverse()}
            renderItem={this._renderItem}
            keyExtractor={(item,index)=> index.toString()}
            />
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:30}}>
          <ActionButton type="incorrect" />
          <ActionButton type="correct" data={this.state.data} popArray={this.popArray} />
        </View>
      </View>
    );
  }
}
