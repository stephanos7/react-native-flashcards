import React from 'react';
import { Text, View , FlatList } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import styles, {RASBERRY_PINK} from "./styles";
import Deck from "./components/Deck";
import List from "./components/List";
import StartDeck from "./components/StartDeck";

export default class App extends React.Component {
  render() {
    return (
      <TabNav />
    );
  }
}

const specificDeckNavigation = createStackNavigator({
  Home: {
    screen: props => (<List {...props} />),
    navigationOptions: ({navigation}) => ({
      headerTitle: "Home",
      })
  },
  Start: {
    screen: props => (<StartDeck {...props} />),
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.title,
      })
  },
  DeckView: {
    screen: (props) => (<Deck {...props}/>),
    navigationOptions: ({navigation}) => ({
      headerTitle: "Deck",
      // header: null
      })
  }
});

const TabNav = createBottomTabNavigator({
  "Home": {
    screen: specificDeckNavigation,
    navigationOptions: ({navigation}) => ({
      tabBarVisible: false,
      })
    },
  "Create New": {
    screen: specificDeckNavigation,
    navigationOptions: ({navigation}) => ({
      tabBarVisible: false,
      })
    }
  },
  {
  tabBarOptions: {
    initialRouteName: "Home",
    backBehavior: true,
    activeTintColor: RASBERRY_PINK,
  }
})




