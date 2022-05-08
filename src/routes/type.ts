import { StackNavigationProp } from '@react-navigation/stack'

export type RootNavigatorParamList = {
  Home: undefined
  Edit: { id: string } | undefined
}

export type HomeNavigationProp = StackNavigationProp<RootNavigatorParamList, "Home">
