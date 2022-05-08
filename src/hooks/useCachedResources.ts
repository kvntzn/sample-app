import * as Font from 'expo-font'
import * as React from 'react'
import * as SplashScreen from 'expo-splash-screen'

import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans'
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load needed resources or data prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          DMSans_400Regular,
          DMSans_500Medium,
          DMSans_700Bold,
          PlayfairDisplay_400Regular,
          PlayfairDisplay_500Medium,
          PlayfairDisplay_700Bold,
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
