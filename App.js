import React from 'react';
import { Text, View , FlatList } from 'react-native';

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

  markCardAttempted = (props) => {
    const {data} = props;
    data.attempted = true;
    this.updateData(data);
  }

  updateData = (cardData) => {
    const copyOfStateData = [...this.state.data];
    copyOfStateData.reverse();
    copyOfStateData.splice(cardData.index, 1, cardData);
    this.setState({data:copyOfStateData});
  }

  _renderItem = (item) => <Card animateSucces={this.animateSucces} {...item}/>

  render() {
    const copyOfData = [...this.state.data];
    const headCard = copyOfData.shift();
    return (
      <View style={styles.container}>
      <Text>{JSON.stringify(this.state.data)}</Text>
        <FlatList
            style={{padding:30}}
            data={this.state.data.reverse()}
            renderItem={this._renderItem}
            keyExtractor={(item,index)=> index.toString()}
            />
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:30}}>
          <ActionButton type="incorrect" />
          <ActionButton type="correct" data={headCard} markCardAttempted={this.markCardAttempted} />
        </View>
      </View>
    );
  }
}
