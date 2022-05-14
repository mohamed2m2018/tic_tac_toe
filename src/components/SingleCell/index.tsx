import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import useBoardStore from '../../store';
import {CellType} from '../../types';
import styles from './styles';

interface Props {
  onPress: (value: CellType) => void;
  value?: CellType;
}

const SingleCell = ({onPress, value}: Props) => {
  const {latestValue, winner, deleteEverything} = useBoardStore(state => ({
    latestValue: state.latestValue,
    winner: state.winner,
    deleteEverything: state.deleteEverything,
  }));

  const handlePress = () => {
    if (winner) {
      return Alert.alert('Game is Finished', 'Press Restart to start again', [
        {
          onPress: deleteEverything,
          text: 'Restart',
        },
      ]);
    }
    if (!value) {
      const nextValue = latestValue === 'X' ? 'O' : 'X';
      onPress?.(nextValue);
    }
  };

  const color = {color: value === 'X' ? colors?.plum : colors?.peru};
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={[styles.text, color]}>{value}</Text>
    </TouchableOpacity>
  );
};

export default SingleCell;
