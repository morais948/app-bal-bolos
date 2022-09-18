import { StatusBar } from 'expo-status-bar'
import { Routes } from './product/main/routes'
import { useFonts } from 'expo-font'
import { Background } from './views/components/Background'
import { Loading } from './views/components/Loading'
import bigNoodle from './assets/fonts/big-noodle/big_noodle_titling.ttf'

interface Props{
  children: React.ReactNode
}

export default function App({children}: Props) {

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
  );
}
