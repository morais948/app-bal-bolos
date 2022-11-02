import { createDrawerNavigator } from "@react-navigation/drawer"
import { Category } from "../../Category/screens/Category"
import { Product } from "../../Product/screens/Product"
import { THEME } from "../../shared/theme/theme"

const { Navigator, Screen } = createDrawerNavigator()

interface Props{
  token: string
}

export function AuthRoutes({ token }: Props){

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
      <Screen name="Produtos" component={Product} />
      <Screen name="Categorias" component={Category} />
    </Navigator>
  )
}