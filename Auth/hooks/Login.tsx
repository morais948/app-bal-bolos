import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Alert } from "react-native"
import { AuthImpl } from "../services/auth.service"

export function useLogin(){
  
  const navagation = useNavigation()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const serviceAuth = new AuthImpl()

  useEffect(() => {
    const checkIfYouAreLoggedIn = async () => {
      setLoading(true)
      const token = await AsyncStorage.getItem('@app_ball:token')
      setLoading(false)
      if(token){
        navagation.navigate('DASBOARD', { token })
      }
    }
    checkIfYouAreLoggedIn()
  }, [])

  async function submitLogin() {
    setLoading(true)
    const response = await serviceAuth.login({
      email: user,
      password: password
    })

    if(!response.success){
      Alert.alert('Erro!', response.errors[0].message)
      await AsyncStorage.removeItem('@app_ball:token')
      setLoading(false)
      return
    }

    const token = response.data!
    await AsyncStorage.setItem('@app_ball:token', token)
    
    setLoading(false)
    navagation.navigate('DASBOARD', { token })
  }

  
  return {
    user,
    setUser,
    password,
    setPassword,
    loading,
    submitLogin
  }
}