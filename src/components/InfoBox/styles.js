import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  infoBox: {
    height: 150,
    width: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textNormal: {
    textAlign: 'center',
    color: colors.text,
  },
  overlayNormal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  overlayHighlight: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  textHighlight: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: colors.text,
    fontSize: 18,
  },
  subtitle: {
    textAlign: 'left',
    color: colors.text,
    fontSize: 12,
  },
});

export default styles;
