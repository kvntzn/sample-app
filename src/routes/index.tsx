import { Button } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeNavigationProp, RootNavigatorParamList } from './type'

import tw from '../lib/tailwind'
import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import EditScreen from '../screens/EditScreen'

const RootStack = createStackNavigator<RootNavigatorParamList>()
const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitleStyle: tw.style('font-serif-bold text-lg'),
        }}
      >
        <RootStack.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <Ionicons
                name='add'
                size={26}
                onPress={() => navigation.navigate('Edit')}
              />
            ),
          })}
        />

        <RootStack.Screen name='Edit' component={EditScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
