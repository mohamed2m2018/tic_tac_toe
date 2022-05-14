import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GameBoard from './src/components/GameBoard';

const App = () => (
  <>
    <Text style={styles.header}>Tic Tac Toe</Text>
    <View style={styles.container}>
      <GameBoard />
    </View>
  </>
);

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  header: {
    fontSize: 40,
    alignSelf: 'center',
    marginVertical: '25%',
  },
});
