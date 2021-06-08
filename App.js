/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type { Node } from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/Home'
import Router from './src/navigation/Router';


// const App: () => Node = () => {


const App = () => {


  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Router />
    </>
  );
};


export default App;
