import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { BUTTON } from '../constants/test_constant'

interface ButtonProps {
  title: string
  onPress: () => void
  loading: boolean
}

const Button = ({ title, onPress, loading }: ButtonProps) => {
  return (
    <TouchableOpacity
      testID={BUTTON}
      style={tw.style(
        'h-10 w-full bg-bronze rounded-lg items-center justify-center'
      )}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color='white' />
      ) : (
        <Text style={tw.style('font-sans-bold text-base text-white')}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})
