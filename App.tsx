import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Routes } from './product/main/routes'

interface Props{
  children: React.ReactNode
}

export default function App({children}: Props) {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor="#CCB3D2"
        translucent
      />
      <Routes />
    </>
  );
}
