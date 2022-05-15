import React, {useCallback} from 'react';
import {View} from 'react-native';
import useBoardStore from '../../store';
import {CellType} from '../../types';
import SingleCell from '../SingleCell';
import styles from './styles';

type Props = {index: number};

const Row = ({index}: Props) => {
  const {
    board = [],
    setBoard,
    setLatestValue,
  } = useBoardStore(state => ({
    board: state.board,
    setBoard: state.setBoard,
    setLatestValue: state.setLatestValue,
    latestValue: state.latestValue,
  }));

  const createRow = useCallback(() => {
    const handlePress = (value: CellType, rowIndex: number) => {
      setLatestValue?.(value);
      const newBoard = [...board];
      newBoard[index][rowIndex] = value;
      setBoard?.(newBoard);
    };

    return board?.map((item, i) => (
      <SingleCell
        key={i + Math.random()}
        value={board[index][i]}
        onPress={value => handlePress(value, i)}
      />
    ));
  }, [board, index, setBoard, setLatestValue]);

  return <View style={styles.container}>{createRow()}</View>;
};

export default Row;
