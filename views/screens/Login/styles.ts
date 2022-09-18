import { StyleSheet } from 'react-native'
import { THEME } from '../../theme/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  login: {
    marginBottom: 150,
    alignItems: 'center'
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BIGNOODLE,
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
    fontFamily: THEME.FONT_FAMILY.MONO,
    borderColor: THEME.COLORS.PURPLE,
    color: THEME.COLORS.WHITE,
    backgroundColor: THEME.COLORS.PURPLE
  }
})