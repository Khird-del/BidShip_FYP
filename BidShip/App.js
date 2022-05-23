/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {Button, Linking, StyleSheet, Text, View, TextInput} from 'react-native';
 
 import Navigation from './src/Navigation';
 
 const App = () => {
   return (
     <View style={styles.body}>
       <Navigation />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex: 1,
   },
 });
 
 export default App;
 