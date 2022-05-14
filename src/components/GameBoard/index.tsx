import React, {useEffect} from 'react';
import {Text, Button, View} from 'react-native';
import checkWin from '../../helpers';
import useBoardStore from '../../store';
import Row from '../Row';
import styles from './styles';

const GameBoard = () => {
  const {
    board = [],
    winner,
    setWinner,
    deleteEverything,
  } = useBoardStore(state => ({
    board: state.board,
    winner: state.winner,
    setWinner: state.setWinner,
    deleteEverything: state.deleteEverything,
  }));

  useEffect(() => {
    const result = checkWin?.(board);
    if (result) {
      setWinner?.(result);
    }
  }, [board, setWinner, winner]);

  return (
    <>
      <View style={styles.container}>
        {board?.map((item, index) => (
          <Row key={index} index={index} />
        ))}
        {Boolean(winner) && (
          <Text style={styles.winnerText}>Winner is {winner}</Text>
        )}
      </View>
      <Button title="New game" onPress={deleteEverything} />
    </>
  );
};

export default GameBoard;
