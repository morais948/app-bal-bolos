import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../../views/screens/Login';
import { THEME } from '../../../views/theme/theme';

const { Navigator, Screen } = createNativeStackNavigator()

function AuthRoutes() {
  return (
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.COLORS.PURPLE
          },
          headerTintColor: THEME.COLORS.WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: THEME.FONT_SIZE.MD,
            fontFamily: THEME.FONT_FAMILY
          },
          headerTitleAlign: 'center'
        }}
      >
        <Screen name="LOGIN" component={Login} />
      </Navigator>
  );
}

export default AuthRoutes;