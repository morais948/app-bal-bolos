import { InternalRoutes } from '../../routes/internal.route'
import { Background } from '../../components/Background'
import { useRoute } from '@react-navigation/native'
import { DasboardData } from '../../@types/navegation'
import { useEffect } from 'react'

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
      // const products = await axios.get(`http://192.168.0.9:3000/categorys?_embed=products`, config)
      // console.log(products.data)
    }
    
    try {
      getProductsWithCategory()
    } catch (error: any) {
      console.log(error.response)
    }
  }, [])
  
  return (
    <Background>
      <InternalRoutes />
    </Background>
  );
}