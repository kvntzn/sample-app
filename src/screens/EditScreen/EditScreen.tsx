import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind'
import colors from '../../constants/colors'
import { Button, Input } from '../../components'
import { Picker } from '@react-native-picker/picker'
import useGetCategories from '../../hooks/useGetCategories'
import useCreateDog from '../../hooks/useCreateDog'
import { StackScreenProps } from '@react-navigation/stack'
import { RootNavigatorParamList } from '../../routes/type'
import useEditDog from '../../hooks/useEditDog'
import useGetDog from '../../hooks/useGetDog'

type EditScreenProps = StackScreenProps<RootNavigatorParamList, 'Edit'>

const EditScreen = ({ navigation, route }: EditScreenProps) => {
  const id = route?.params?.id

  useGetDog(id, {
    enabled: !!id,
    onSuccess: (data) => {
      if (data) {
        setName(data.name)
        setDescription(data.description)
        setCategory(data.category)
        setIsActive(data.isActive)
      }
    },
  })
  const { mutate: create, isLoading: isCreating } = useCreateDog()
  const { mutate: edit, isLoading: isUpdating } = useEditDog()

  const { data: categories } = useGetCategories()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [isActive, setIsActive] = useState(false)

  const onSubmit = () => {
    if (id) {
      edit(
        {
          id,
          fieldToUpdate: {
            name,
            description,
            category,
            isActive,
          },
        },
        {
          onSuccess: () => navigation.goBack(),
        }
      )
    } else {
      create(
        {
          name,
          description,
          category,
          isActive,
        },
        {
          onSuccess: () => navigation.goBack(),
        }
      )
    }
  }

  return (
    <View style={tw.style('flex-1 p-4')}>
      <Input label='Name' value={name} onChangeText={setName} />
      <Input
        label='Description'
        value={description}
        onChangeText={setDescription}
      />
      <Picker
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
      >
        {categories?.map((d) => (
          <Picker.Item label={d} value={d} />
        ))}
      </Picker>
      <View style={tw.style('flex-row justify-between mb-10')}>
        <Text style={tw.style('font-sans text-base mr-2')}>Active</Text>
        <Switch
          value={isActive}
          onValueChange={setIsActive}
          thumbColor={colors.bronze.base}
          trackColor={{
            false: colors.gray.base,
            true: colors.bronze.light,
          }}
        />
      </View>

      <Button
        onPress={onSubmit}
        loading={isCreating || isUpdating}
        title='Submit'
      />
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({})
