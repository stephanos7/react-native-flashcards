import React from 'react';
import { Text, View , FlatList } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import styles from "./styles";
import Deck from "./components/Deck";
import List from "./components/List";

export default class App extends React.Component {
  render() {
    return (
      <TabNav />
    );
  }
}

const specificDeckNavigation = createStackNavigator({
  DeckView: {
    screen: (props) => (<Deck {...props}/>),
    navigationOptions: ({navigation}) => ({
      headerTitle: "title",
      // header: null
      })
  }
});

const TabNav = createBottomTabNavigator({
  Home: {
    screen: props => (<List {...props} />),
  },
  Decks: {
    screen: specificDeckNavigation,
    navigationOptions: ({navigation}) => ({
      tabBarVisible: false,
      })
    }
  },
  {
  tabBarOptions: {
    initialRouteName: "Home",
    activeTintColor: '#e91e63',
  }
})




