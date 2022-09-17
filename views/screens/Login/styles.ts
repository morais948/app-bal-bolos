import { StyleSheet } from 'react-native'
import { THEME } from '../../theme/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.WHITE
  },
  login: {
    marginBottom: 150,
    alignItems: 'center'
  },
  title: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY,
    color: THEME.COLORS.GRAY,
    fontWeight: '900',
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY,
    borderColor: THEME.COLORS.ROSE,
    color: THEME.COLORS.GRAY
  }
})