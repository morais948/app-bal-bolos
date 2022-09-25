import { createDrawerNavigator } from '@react-navigation/drawer';
import { Category } from '../screens/Category';
import { Product } from '../screens/Product';

const { Navigator, Screen } = createDrawerNavigator()

export function InternalRoutes(){
  return (
    <Navigator>
      <Screen name="Product" component={Product} />
      <Screen name="Category" component={Category} />
    </Navigator>
  )
}