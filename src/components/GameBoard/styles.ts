import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  winnerText: {
    marginTop: 20,
    fontSize: 30,
    color: colors?.tomato,
  },
  container: {
    marginBottom: 10,
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 150,
    borderRadius: 25,
    backgroundColor: colors?.tomato,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors?.white,
  },
});

export default styles;
