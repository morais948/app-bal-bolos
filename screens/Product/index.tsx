import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import { useContext, useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background'
import { CardProduct } from '../../components/CardProduct'
import { AppContext } from '../../contexts/products/product-context'

import { styles } from './styles'

export function Product() {

  const { token, products }: any = useContext(AppContext)

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => <CardProduct data={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        >

        </FlatList>
      </SafeAreaView>
    </Background>
  )
}