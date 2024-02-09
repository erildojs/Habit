import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#333', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#FFF', fontSize: 29, fontWeight: 'bold' }}>erildo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

