import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import checkWin from '../../helpers';
import useBoardStore from '../../store';
import Row from '../Row';
import styles from './styles';

const GameBoard = () => {
  const {
    board = [],
    winner,
    setWinner,
    latestValue,
    deleteEverything,
  } = useBoardStore(state => ({
    board: state.board,
    winner: state.winner,
    setWinner: state.setWinner,
    deleteEverything: state.deleteEverything,
    latestValue: state.latestValue,
  }));

  useEffect(() => {
    const result = checkWin?.(board);
    if (result) {
      setWinner?.(result);
    }
  }, [board, setWinner, winner]);

  const turn = latestValue === 'X' ? 'O' : 'X';

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.turn}>{!winner && `Player ${turn} turn`} </Text>
        {board?.map((item, index) => (
          <Row key={index} index={index} />
        ))}
        {Boolean(winner) && (
          <Text style={styles.winnerText}>Winner is {winner}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={deleteEverything}>
        <Text style={styles.buttonText}>New game</Text>
      </TouchableOpacity>
    </>
  );
};

export default GameBoard;
