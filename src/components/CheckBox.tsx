import { View, Text } from 'react-native'
import Checkbox from 'expo-checkbox'
import React from 'react'
import tw from '../lib/tailwind'
import colors from '../constants/colors'

interface SwitchProps {
  label?: string
  value: boolean
  onValueChange: (value: boolean) => void
}

const CheckBox = ({ label, value, onValueChange }: SwitchProps) => {
  return (
    <View style={tw.style('flex-row items-center my-2')}>
      <Text style={tw.style('font-sans text-sm mr-2')}>{label}</Text>
      <Checkbox
        value={value}
        onValueChange={onValueChange}
        color={value ? colors.bronze.base : undefined}
        style={{ backgroundColor: colors.white}}
      />
    </View>
  )
}

export default CheckBox
