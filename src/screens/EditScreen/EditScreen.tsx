import { Alert, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
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
import { Ionicons } from '@expo/vector-icons'
import useDeleteDogs from '../../hooks/useDeleteDogs'
import { Platform } from 'react-native'

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
  const { mutate: deleteDog } = useDeleteDogs()

  const { data: categories } = useGetCategories()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('toy')
  const [isActive, setIsActive] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = () => {
    setError(false)
    if (!name || !description) {
      setError(true)
      return
    }

    if (id) {
      edit(
        {
          id,
          fieldToUpdate: {
            name,
            description,
            category,
            isActive,
            date: new Date().toISOString(),
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
          date: new Date().toISOString(),
        },
        {
          onSuccess: () => navigation.goBack(),
        }
      )
    }
  }

  const onDelete = () => {
    if (!id) return

    const title = 'Warning'
    const message = 'Are you sure you want to delete this ?'
    if (Platform.OS === 'web') {
      const result = window.confirm(`${title}\n${message}`)
      if (result) {
        deleteDog([id], {
          onSettled: () => {
            navigation.goBack()
          },
        })
      }
    }

    Alert.alert(title, message, [
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () =>
          deleteDog([id], {
            onSettled: () => {
              navigation.goBack()
            },
          }),
      },
      { text: 'Cancel', style: 'cancel' },
    ])
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? 'Edit' : 'Create',
      headerRight: () => {
        return id ? (
          <Ionicons
            name='trash'
            size={26}
            color={colors.red}
            onPress={onDelete}
          />
        ) : null
      },
    })
  }, [navigation])

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
          <Picker.Item key={d} label={d} value={d} />
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

      {error && (
        <Text style={tw.style('font-sans text-red text-base self-center my-2')}>
          Name and Description is required.
        </Text>
      )}
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
