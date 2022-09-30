import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: THEME.COLORS.GRAY,
    width: '110%',
    height: '130%',
    opacity: .6
  }
});