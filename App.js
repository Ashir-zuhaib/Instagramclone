import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Signup from './Screen/Signup';
import Login from './Screen/Login';
import MyStack from './Screen/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
  export default function App() {
  return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
