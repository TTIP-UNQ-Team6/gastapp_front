import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitialScreen from './src/screens/InitialScreen'
import Expenses from './src/screens/Expenses'

const App = () => {
  return (
    <View style={styles.container}>
        <Expenses/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
  },
});

export default App;