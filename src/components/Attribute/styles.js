import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  attributes: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 100,
    color: colors.text,
    marginLeft: 10,
  },
  colorIndicator: {
    height: 30,
    width: 30,
    borderWidth: 1,
    margin: 7,
    transform: [{rotate: '45deg'}],
  },
});

export default styles;
