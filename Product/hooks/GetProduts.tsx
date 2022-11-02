import { useContext, useEffect } from "react"
import { Alert } from "react-native"
import { AppContext } from "../../shared/contexts/products/product.context"
import { ProductServiceImpl } from "../services/product.service"

//terminar
export function useGetProducts(){

  const serviceProduct = new ProductServiceImpl()
  const { setProducts }: any = useContext(AppContext) 

  async function getProducts(){
    const products = await serviceProduct.getProducts()
    console.log(products)
    if(!products.success){
      Alert.alert('Erro!', products.errors[0].message)
      return
    }
    setProducts(products.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return {}
}