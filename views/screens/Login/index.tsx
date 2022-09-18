import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background'
import { styles } from './styles'

export function Login() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.login}>
          <Text style={styles.title}>BEM VINDO</Text>

          <TextInput 
            style={styles.input}
            placeholder="usuário"
            placeholderTextColor="#fff" 
          />

          <TextInput 
            style={styles.input}
            placeholder="senha"
            placeholderTextColor="#fff" 
          />
        </View>
  
      </SafeAreaView>
    </Background>
  )
}