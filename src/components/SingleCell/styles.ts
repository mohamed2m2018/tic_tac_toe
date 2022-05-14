import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.black,
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default styles;
