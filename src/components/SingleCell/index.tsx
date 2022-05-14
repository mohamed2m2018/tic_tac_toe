import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import useBoardStore from '../../store';
import {CellType} from '../../types';
import styles from './styles';

interface Props {
  onPress: (value: CellType) => void;
  value?: CellType;
}

const SingleCell = ({onPress, value}: Props) => {
  const {latestValue} = useBoardStore(state => ({
    latestValue: state.latestValue,
  }));

  const handlePress = () => {
    if (!value) {
      const nextValue = latestValue === 'X' ? 'O' : 'X';
      onPress?.(nextValue);
    }
  };

  const color = {color: value === 'X' ? 'plum' : 'peru'};
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={[styles.text, color]}>{value}</Text>
    </TouchableOpacity>
  );
};

export default SingleCell;