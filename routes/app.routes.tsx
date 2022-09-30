import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Auth/screens/Login";
import { Dasboard } from "../Auth/screens/Painel";
import { THEME } from "../shared/theme/theme";


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
          options={{
            headerShown: false
          }}
          name="DASBOARD" component={Dasboard} 
        />
      </Navigator>
  );
}

export default AppRoutes;