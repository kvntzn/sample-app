import { StackNavigationProp } from '@react-navigation/stack'

export type RootNavigatorParamList = {
  Home: undefined
  Edit: { id: number } | undefined
}

export type HomeNavigationProp = StackNavigationProp<RootNavigatorParamList, "Home">
