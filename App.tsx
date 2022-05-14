import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GameBoard from './src/components/GameBoard';
import colors from './src/constants/colors';

const App = () => (
  <View style={styles?.outerContainer}>
    <Text style={styles.header}>Tic Tac Toe</Text>
    <View style={styles.container}>
      <GameBoard />
    </View>
  </View>
);

export default App;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors?.dodgerBlue,
  },
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
