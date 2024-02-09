import { Text, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })
  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#09090A', alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Text style={{ color: '#FFF', fontSize: 29, fontWeight: 'bold' }}>erildo</Text>
    </View>
  );
}

