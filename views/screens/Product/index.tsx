import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { AsyncStorage, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { DasboardData } from '../../../@types/navegation';
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Dasboard() {

  const route = useRoute()
  const credentials = route.params as DasboardData

  useEffect(() => {
    console.log(credentials)
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