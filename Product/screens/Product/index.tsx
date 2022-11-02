import { useContext } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../../shared/components/Background'
import { AppContext } from '../../../shared/contexts/products/product.context'
import { CardProduct } from '../../components/CardProduct'
import { useGetProducts } from '../../hooks/GetProduts'


import { styles } from './styles'

export function Product() {

  const { token, products }: any = useContext(AppContext)
  const {} = useGetProducts()

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