import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const RootStack = createStackNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='Home' component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
