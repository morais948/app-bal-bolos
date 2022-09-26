import { InternalRoutes } from '../../routes/internal.route'
import { Background } from '../../components/Background'
import { useRoute } from '@react-navigation/native';
import { DasboardData } from '../../@types/navegation';

export function Dasboard() {  
  const route = useRoute()
  const { token } = route.params as DasboardData

  return (
    <Background>
      <InternalRoutes token={token} />
    </Background>
  );
}