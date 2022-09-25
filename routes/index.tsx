import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app-routes';
import { InternalRoutes } from './internal.route';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}