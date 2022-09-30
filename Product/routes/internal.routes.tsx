import { createDrawerNavigator } from "@react-navigation/drawer"
import axios from "axios"
import { useEffect, useState } from "react"
import { Alert } from "react-native"
import { Category } from "../../Category/screens/Category"
import { AppContext } from "../../shared/contexts/products/product.context"
import { THEME } from "../../shared/theme/theme"
import { Product } from "../screens/Product"

const { Navigator, Screen } = createDrawerNavigator()

interface Props{
  token: string
}

export type Category = {
  id: string,
  name: string
}

export type Product = {
  id: number
  name: string
  description: string
  image: string
  categoryId: string
}

export function InternalRoutes({ token }: Props){

  const [ categorys, setCategorys ] = useState<Category[]>([])
  const [ products, setProducts ] = useState<Product[]>([])

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    const getCategorys = async () => {
      const categorys = await axios.get(`http://192.168.0.9:3000/categorys`, config)
      const categorysFormated = categorys.data as Category[]
      setCategorys(categorysFormated)
    }

    const getProducts = async () => {
      const products = await axios.get(`http://192.168.0.9:3000/products`, config)
      const productsFormated = products.data as Product[]
      setProducts(productsFormated)
    }

    try {
      getCategorys()
      getProducts()
    } catch (error: any) {
      Alert.alert('Erro!', error.response.data.body.errors[0].message.toString())
    }
  }, [])

  return (
    <AppContext.Provider value={{ categorys, setCategorys, products, setProducts, token }}>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.COLORS.PURPLE
          },
          headerTintColor: THEME.COLORS.WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: THEME.FONT_SIZE.MD,
            fontFamily: THEME.FONT_FAMILY.MONO
          },
          headerTitleAlign: 'center'
        }}
      >
        <Screen name="Produtos" component={Product} />
        <Screen name="Categorias" component={Category} />
      </Navigator>
    </AppContext.Provider>
  )
}