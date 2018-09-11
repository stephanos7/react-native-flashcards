import React from 'react';
import { Text, View , FlatList } from 'react-native';

import styles from "./styles";
import Card from "./components/Card";
import ActionButton from './components/ActionButton';
import Counter from "./components/Counter";


export default class App extends React.Component {
  state = {
    score: 0,
    totalItems:0,
    data:[
      {
        question:"JavaScript was being developed under the name Mocha.",
        attempted:"",
        answer: "correct"
      },
      {
        question:"JavaScript was created in 100 days only.",
        attempted:"",
        answer: "incorrect"
      },
      {
        question:"JavaScript doesn’t have an integer data type.",
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
    this.updateData(data, this.updateScore);
  }

  updateScore = (cardData) => {
    if(cardData.attempted === cardData.answer){
      this.setState(prevState => ({score: prevState.score +1}));
    }
  }

  updateData = (cardData, cbToUpdateScore) => {
    const copyOfStateData = [...this.state.data];
    const removeLastVerstionOfItem = copyOfStateData.filter( item => item.question !== cardData.question)
    const addLatestVersionOfItem = removeLastVerstionOfItem.concat(cardData);
    this.setState(() => ({data:copyOfStateData}),cbToUpdateScore(cardData));
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

  componentDidMount() {
    this.setState( () => ({totalItems:this.state.data.length}))
  }
  
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
              keyExtractor={(item,index) => index.toString()}
              />
        : this.renderEndOfDeck() }
        <View style={styles.buttonsContainer}>
          <ActionButton type="incorrect" 
                        data={headCard} 
                        attemptCard={this.attemptCard}
                        handleEndOfDeck={this.handleEndOfDeck} />
          <Counter score={this.state.score} total={this.state.totalItems} />
          <ActionButton type="correct" 
                        data={headCard} 
                        attemptCard={this.attemptCard}
                        handleEndOfDeck={this.handleEndOfDeck} />
        </View>
      </View>
    );
  }
}
