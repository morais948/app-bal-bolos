import { Background } from '../../../shared/components/Background'
import { useRoute } from '@react-navigation/native';
import { DasboardData } from '../../../@types/navegation';
import { AuthRoutes } from '../../routes/auth.routes';

export function Dasboard() {  
  const route = useRoute()
  const { token } = route.params as DasboardData

  return (
    <Background>
      <AuthRoutes token={token} />
    </Background>
  );
}