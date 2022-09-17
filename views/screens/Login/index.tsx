import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'

export function Login() {
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.login}>
      <Text style={styles.title}>Bem Vindo</Text>

      <TextInput 
        style={styles.input}
        placeholder="usuário"
      />

      <TextInput 
        style={styles.input}
        placeholder="senha"
      />
      </View>
    
  </SafeAreaView>
  )
}