import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Background } from "../../../shared/components/Background"
import { Loading } from "../../../shared/components/Loading"
import { useLogin } from "../../hooks/Login"
import { styles } from "./styles"

export function Login() {

  const {
    setUser,
    setPassword,
    loading,
    submitLogin
  } = useLogin()

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