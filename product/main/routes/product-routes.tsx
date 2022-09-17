import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Product } from '../../../views/screens/Product';
import { THEME } from '../../../views/theme/theme';

const { Navigator, Screen } = createNativeStackNavigator()

function ProductRoutes() {
  return (
      <Navigator>
        <Screen
          name="PRODUCT" component={Product} 
        />
      </Navigator>
  );
}

export default ProductRoutes;