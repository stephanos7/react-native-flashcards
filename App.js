import React from 'react';
import { View , FlatList } from 'react-native';

import styles from "./styles";
import Card from "./components/Card";
import ActionButton from './components/ActionButton';

export default class App extends React.Component {
  state = {
    data:[{question:"apples", attempted:false},{question:"orange",attempted:false},{question:"lemon", attempted:false}],
  }

  // popArray = () => {
  //   // const copyOfData = [...this.state.data];
  //   // copyOfData.pop();
  //   // this.setState(() => ({data:copyOfData}));
  // }



  // attemptItem = async () => {
  //   const copyOfData = [...this.state.data];
  //   const targetItem = copyOfData.pop();
  //   targetItem.attempted = true;
  //   await copyOfData.push(targetItem);
  //   this.setState(() => ({data:copyOfData}));
  // }

  _renderItem = (item) => <Card animateSucces={this.animateSucces} {...item}/>

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            style={{padding:30}}
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item,index)=> index.toString()}
            />
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:30}}>
          <ActionButton type="incorrect" />
          <ActionButton type="correct" data={this.state.data} attemptItem={this.attemptItem} />
        </View>
      </View>
    );
  }
}
