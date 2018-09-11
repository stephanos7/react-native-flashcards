import React from 'react';
import { Text, View , FlatList } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import styles from "./styles";
import Deck from "./components/Deck";


export default class App extends React.Component {
  render() {
    return (
      <TabNav />
    );
  }
}

class HomeView extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>home</Text>
      </View>
    )
  }
}

export const specificDeckNavigation = createStackNavigator({
  HomeView: {
    screen: (props) => (<Deck />)
  }
});

export const TabNav = createBottomTabNavigator({
  Home: {
    screen: props => (<HomeView {...props} />),
  },
  Decks: {
    screen: specificDeckNavigation,
    // navigationOptions: () => ({
    //   headerTitle: "specific deck"
    //   })
  }
  },
  {
  tabBarOptions: {
    initialRouteName: "Home",
    activeTintColor: '#e91e63',
  }
})




