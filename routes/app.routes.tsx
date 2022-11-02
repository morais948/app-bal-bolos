import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Login } from "../Auth/screens/Login";
import { Dasboard } from "../Auth/screens/Painel";
import { AppContext } from "../shared/contexts/products/product.context";
import { Category } from "../shared/entity/category";
import { Product } from "../shared/entity/product";
import { Token } from "../shared/object-value/token";
import { THEME } from "../shared/theme/theme";


const { Navigator, Screen } = createNativeStackNavigator()

function AppRoutes() {

  const [categorys, setCategorys] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const token: Token | null = null

  return (
    <AppContext.Provider value={{ categorys, setCategorys, products, setProducts, token }}>
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
    </AppContext.Provider>
  );
}

export default AppRoutes;