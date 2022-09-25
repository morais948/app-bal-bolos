import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { DasboardData } from '../../../@types/navegation';
import { Background } from '../../components/Background';

import { styles } from './styles';
import axios from 'axios';
import { CONFIG } from '../../../shared/config/config';

export function Dasboard() {

  const route = useRoute()
  const { token } = route.params as DasboardData

  useEffect(() => {
    const getProductsWithCategory = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      const products = await axios.get(`${CONFIG.api.url}/product`)
      console.log(products.data.body.data)
      // const products = await axios.get(`http://localhost:3000/products`)
      // console.log(products.data)
    }
    
    try {
      getProductsWithCategory()
    } catch (error: any) {
      console.log(error)
    }
  }, [])
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text>
          Hello Dasboard !
        </Text>
      </SafeAreaView>
    </Background>
  );
}