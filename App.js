import React from 'react';
import { Text, View , FlatList } from 'react-native';

import styles from "./styles";
import Card from "./components/Card";
import ActionButton from './components/ActionButton';

export default class App extends React.Component {
  state = {
    data:[{question:"JavaScript was being developed under the name Mocha.", attempted:false},{question:"orange",attempted:false},{question:"lemon", attempted:false}],
  }

  markCardAttempted = (props) => {
    const {data} = props;
    data.attempted = true;
    console.log("when changing to true: ", JSON.stringify(data))
    this.updateData(data);
  }

  updateData = (cardData) => {
    const copyOfStateData = [...this.state.data];
    copyOfStateData.reverse();
    copyOfStateData.splice(cardData.index, 1, cardData);
    this.setState( () => ({data:copyOfStateData}));
  }

  _renderItem = (item) => <Card animateSucces={this.animateSucces} {...item}/>

  render() {
    const copyOfData = [...this.state.data];
    const headCard = copyOfData.shift();
    return (
      <View style={styles.container}>
        <FlatList
            style={{padding:30}}
            data={this.state.data.reverse()}
            renderItem={this._renderItem}
            keyExtractor={(item,index)=> index.toString()}
            />
        <View style={styles.buttonsContainer}>
          <ActionButton type="incorrect" />
          <ActionButton type="correct" data={headCard} markCardAttempted={this.markCardAttempted} />
        </View>
      </View>
    );
  }
}
