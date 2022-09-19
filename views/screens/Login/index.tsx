import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DasboardData } from '../../../@types/navegation'
import { Background } from '../../components/Background'
import { styles } from './styles'

export function Login() {

  const navagation = useNavigation()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  function submitLogin({ user, password }: DasboardData) {
    navagation.navigate('DASBOARD', { user, password })
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.login}>
          <Text style={styles.title}>BEM VINDO</Text>

          <TextInput 
            style={styles.input}
            placeholder="usuário"
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
            onPress={() => submitLogin({user, password})}
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