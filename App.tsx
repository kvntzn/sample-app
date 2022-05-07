import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import tw from './src/lib/tailwind'


export default function App() {
  return (
    <View style={tw.style('flex-1 bg-red')}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
