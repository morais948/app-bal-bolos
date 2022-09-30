import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { useEffect, useState } from "react"
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Background } from "../../../shared/components/Background"
import { Loading } from "../../../shared/components/Loading"
import { CONFIG } from "../../../shared/config/config"
import { useLogin } from "../../hooks/Login"
import { styles } from "./styles"


export function Login() {

  const {
    user,
    setUser,
    password,
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