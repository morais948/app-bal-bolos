import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CONFIG } from '../../../shared/config/config'
import { Background } from '../../components/Background'
import { Loading } from '../../components/Loading'
import { styles } from './styles'

export function Login() {

  const navagation = useNavigation()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

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
    try {
      setLoading(true)
      const response = await axios.post(`${CONFIG.api.url}/login`, {
        email: user,
        password: password
      })

      const token = response.data.body.data
      await AsyncStorage.setItem('@app_ball:token', token)
      setLoading(false)
      navagation.navigate('DASBOARD', { token })
    } catch (error: any) {
      await AsyncStorage.removeItem('@app_ball:token')
      setLoading(false)
      Alert.alert('Erro!', error.response.data.body.errors[0].message.toString())
    }
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        { loading ? <Loading /> : null }
        <View style={styles.login}>
          <Text style={styles.title}>BEM VINDO</Text>

          <TextInput 
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#fff" 
            onChangeText={(txt) => setUser(txt)}
          />

          <TextInput 
            style={styles.input}
            placeholder="senha"
            placeholderTextColor="#fff" 
            onChangeText={(txt) => setPassword(txt)}
            secureTextEntry={true}
          />
          
          <TouchableOpacity
            onPress={() => submitLogin()}
            style={styles.submit}
          >
            <Text style={styles.textSubmit}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
  
      </SafeAreaView>
    </Background>
  )
}