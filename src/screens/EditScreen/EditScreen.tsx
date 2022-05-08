import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind'
import { Input } from '../../components'

const EditScreen = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [isActive, setIsActive] = useState(false)

  return (
    <View style={tw.style('flex-1 p-4')}>
      <Input label='Name' value={name} onChangeText={setName} />
      <Input
        label='Description'
        value={description}
        onChangeText={setDescription}
      />
      <Switch value={isActive} onValueChange={setIsActive} />
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({})
