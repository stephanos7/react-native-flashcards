import React from 'react';
import { Text, View , FlatList } from 'react-native';

import styles from "./styles";
import Card from "./components/Card";
import ActionButton from './components/ActionButton';

export default class App extends React.Component {
  state = {
    data:[
      {
        question:"JavaScript was being developed under the name Mocha.",
        attempted:"",
        answer: "correct"
      },
      {
        question:"orange",
        attempted:"",
        answer: "incorrect"
      },
      {
        question:"lemon",
        attempted:"",
        answer: "correct"
      }
    ],
  }

  removeAttemptedCard = () => {
    const copyOfStateData = [...this.state.data];
    copyOfStateData.pop();
    this.setState( () => ({data:copyOfStateData}));
  }

  attemptCard = (data, userResponse) => {
    data.attempted = userResponse;
    this.updateData(data);
  }

  updateData = (cardData) => {
    const copyOfStateData = [...this.state.data];
    const removeLastVerstionOfItem = copyOfStateData.filter( item => item.question !== cardData.question)
    const addLatestVersionOfItem = removeLastVerstionOfItem.concat(cardData);
    this.setState(() => ({data:copyOfStateData}));
    
  }

  renderEndOfDeck = () => {
    return(
      <View style={styles.endOfDeckContainer}>
        <Text style={styles.endOfDecktText}>No more cards!😔</Text>
      </View>  
    )
  }

  _renderItem = (item) => <Card {...item}
                                animateSucces={this.animateSucces}
                                removeAttemptedCard={this.removeAttemptedCard} />
  render() {
    const {data} = this.state
    const copyOfData = [...this.state.data];
    const headCard = copyOfData.pop();
    return (
      <View style={[styles.container, {justifyContent:"space-between"}]}>
        {data.length !== 0 ? 
          <FlatList
              style={{padding:30}}
              data={this.state.data}
              renderItem={this._renderItem}
              keyExtractor={(item,index)=> index.toString()}
              />
        : this.renderEndOfDeck() }
        <View style={styles.buttonsContainer}>
          <ActionButton type="incorrect" 
                        data={headCard} 
                        attemptCard={this.attemptCard}
                        handleEndOfDeck={this.handleEndOfDeck} />
          <ActionButton type="correct" 
                        data={headCard} 
                        attemptCard={this.attemptCard}
                        handleEndOfDeck={this.handleEndOfDeck} />
        </View>
      </View>
    );
  }
}
