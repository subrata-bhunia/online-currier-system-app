import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View,Text, StatusBar } from 'react-native';
import AppStack from './src/router/Appstack';


const App =() =>{
  return(
    <NavigationContainer>
      <StatusBar hidden />
      <AppStack />
    </NavigationContainer>
  )
}

export default App;