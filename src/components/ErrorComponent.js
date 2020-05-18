  
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export function ErrorComponent({error}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
    alignSelf: 'center'
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15
  },
});