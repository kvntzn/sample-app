import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../lib/tailwind'

interface InputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
}

const Input = ({ label, value, onChangeText }: InputProps) => {
  return (
    <View style={tw.style('flex-row items-center my-2')}>
      <Text style={tw.style('text-base mr-2')}>{label}</Text>
      <TextInput
        style={tw.style('bg-white rounded-md h-10 w-full p-1')}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})
