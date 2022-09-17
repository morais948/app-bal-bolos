import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function Product() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          Hello Product!
        </Text>
      </View>
    </SafeAreaView>
  );
}