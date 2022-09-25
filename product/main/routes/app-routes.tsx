import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dasboard } from '../../../views/screens/Product';
import { Login } from '../../../views/screens/Login';
import { THEME } from '../../../views/theme/theme';

const { Navigator, Screen } = createNativeStackNavigator()

function AppRoutes() {
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
            fontFamily: THEME.FONT_FAMILY.MONO
          },
          headerTitleAlign: 'center'
        }}
      >
        <Screen name="LOGIN" component={Login} />
        <Screen
          name="DASBOARD" component={Dasboard} 
        />
      </Navigator>
  );
}

export default AppRoutes;