import { Text, View } from 'react-native'
import { Background } from '../../../shared/components/Background';

import { styles } from './styles'

export function Category() {
  return (
    <Background>
      <View style={styles.container}>
        <Text>
          Categorias
        </Text>
      </View>
    </Background>
  );
}