import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';

import { useState, useEffect } from 'react';

//import pages
import HomeScreen from './screens/home';
import ListScreen from './screens/list'
import WelcomeScreen from './screens/welcome';

//firebase
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'white'
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
})


class App extends React.Component {
  state = {
    firstlaunch: null,
  }

  componentDidMount() {
    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        this.setState({ firstlaunch: true });
      }
      else {
        this.setState({ firstlaunch: true });
        //console.log(this.state)
      }
    })
  }

  render() {
    if (this.state.firstlaunch == null) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      )
    } else if (this.state.firstlaunch) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='firstlaunch'>
            <Stack.Screen
              name="default"
              component={Tabs}
            />
            <Stack.Screen
              name="firstlaunch"
              component={WelcomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else if (!this.state.firstlaunch) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="default">

            <Stack.Screen
              name="default"
              component={Tabs}
            />
            <Stack.Screen
              name="firstlaunch"
              component={WelcomeScreen}
            />

          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }

}

export default App;