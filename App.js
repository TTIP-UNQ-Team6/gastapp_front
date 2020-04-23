import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitialScreen from './src/screens/InitialScreen'
import ExpensesScreen from './src/screens/ExpensesScreen'

const App = () => {
  return (
    <View style={styles.container}>
        <ExpensesScreen/>
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