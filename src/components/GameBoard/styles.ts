import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  winnerText: {
    marginTop: 20,
    fontSize: 30,
    color: colors?.white,
  },
  turn: {
    fontSize: 30,
    color: colors?.white,
    marginBottom: 15,
  },
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    height: 45,
    width: 308,
    borderRadius: 30,
    backgroundColor: colors?.tomato,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors?.white,
  },
});

export default styles;
