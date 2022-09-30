

import { ActivityIndicator, View } from 'react-native';
import { THEME } from '../../theme/theme';
import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={70} color={THEME.COLORS.ROSE} />
    </View>
  );
}