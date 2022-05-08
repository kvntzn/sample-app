import { Button } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { HomeNavigationProp, RootNavigatorParamList } from './type'
import EditScreen from '../screens/EditScreen'

const RootStack = createStackNavigator<RootNavigatorParamList>()
const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Edit')}
                title='Add'
                color='#000'
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
