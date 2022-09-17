import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth-routes';
import ProductRoutes from './product-routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
      {/* <ProductRoutes /> */}
    </NavigationContainer>
  );
}