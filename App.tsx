import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar";
import bigNoodle from './assets/fonts/big-noodle/big_noodle_titling.ttf'
import { Routes } from "./routes";
import { Background } from "./shared/components/Background";
import { Loading } from "./shared/components/Loading";


export default function App() {

  const [fontLoaded] = useFonts({
    'BIG-NOODLE': bigNoodle,
  })

  return (
    <Background>
      <StatusBar
        style="light"
        backgroundColor="#CCB3D2"
        translucent
      />
      { fontLoaded ? <Routes /> : <Loading /> }
    </Background>
  )
}
