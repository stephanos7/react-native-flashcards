import React from 'react';
import { Text, View , FlatList } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import styles, {RASBERRY_PINK} from "./styles";
import Deck from "./components/Deck";
import List from "./components/List";
import StartDeckView from "./components/StartDeckView";
import AddTitleView from "./components/AddTitleView";
import AddCardView from "./components/AddCardView";

export default class App extends React.Component {
  render() {
    return (
      <TabNav />
    );
  }
}

const startDeckNavigation = createStackNavigator({
  Home: {
    screen: props => (<List {...props} />),
    navigationOptions: ({navigation}) => ({
      headerTitle: "Home",
      })
  },
  Start: {
    screen: props => (<StartDeckView {...props} />),
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

const newCardNavigation = createStackNavigator({
  AddTitle: {
    screen: props => (<AddTitleView {...props} />),
    navigationOptions: ({navigation}) => ({
      tabBarVisible: false,
      })
    },
  AddCard: {
      screen: props => (<AddCardView {...props} />),
      navigationOptions: ({navigation}) => ({
        tabBarVisible: false,
        })
    }
});

const TabNav = createBottomTabNavigator({
  "Home": {
    screen: startDeckNavigation,
    navigationOptions: ({navigation}) => ({
      tabBarVisible: true,
      })
    },
  "Create New": {
    screen: newCardNavigation,
    navigationOptions: ({navigation}) => ({
      tabBarVisible: true,
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




