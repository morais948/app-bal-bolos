import { ImageBackground, Text, TouchableOpacity } from 'react-native'
import { Product } from '../../routes/internal.route'

import { styles } from './styles'

export interface CardProps{
  data: Product
}

export function CardProduct({ data }: CardProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
    >
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.image }}
      >

        <Text>
          {data.name}
        </Text>

      </ImageBackground>
    </TouchableOpacity>
  );
}