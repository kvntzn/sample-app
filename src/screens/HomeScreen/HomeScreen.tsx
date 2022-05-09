import {
  FlatList,
  View,
  Alert,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import tw from '../../lib/tailwind'
import useGetDogs from '../../hooks/useGetDogs'
import { Dog } from '../../models/Dog'
import { filterDogs } from '../../lib/filter'
import { Card } from '../../components'
import Filter from './components/Filter'
import { FilterOptions } from '../../models/FilterOptions'
import { StackScreenProps } from '@react-navigation/stack'
import { RootNavigatorParamList } from '../../routes/type'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors'
import useDeleteDogs from '../../hooks/useDeleteDogs'
import { Platform } from 'react-native'

type HomeScreenProps = StackScreenProps<RootNavigatorParamList, 'Home'>

const Home = ({ navigation }: HomeScreenProps) => {
  // custom hooks
  const {
    data: initialData,
    isLoading,
    refetch,
  } = useGetDogs({
    onSuccess: (data) => setDogs(data),
    select: (data) => data.sort((a, b) => (a.date > b.date ? -1 : 1)),
  })
  const { mutate: deleteDogs } = useDeleteDogs()

  // states
  const [dogs, setDogs] = useState<Dog[]>([])
  const [isEditMode, setIsEditMode] = useState(false)
  const switchEditMode = () => {
    setIsEditMode(!isEditMode)
    if (!isEditMode && initialData) {
      setDogs(initialData)
    }
  }
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    criteria: '',
    active: false,
    inactive: false,
  })

  // functions
  const onDelete = () => {
    if (!dogs.some((d) => d.isChecked)) {
      alert(`Please select 1 or more item to delete`)
      return
    }

    const title = 'Warning'
    const message = 'Are you sure you want to delete this ?'

    if (Platform.OS === 'web') {
      const result = window.confirm(`${title}\n${message}`)
      if (result) {
        deleteDogs(
          dogs.filter((d) => d.isChecked).map((s) => s.id),
          {
            onSettled: () => {
              setIsEditMode(false)
            },
          }
        )
      }
    } else {
      Alert.alert(title, message, [
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () =>
            deleteDogs(
              dogs.filter((d) => d.isChecked).map((s) => s.id),
              {
                onSettled: () => {
                  setIsEditMode(false)
                },
              }
            ),
        },
        { text: 'Cancel', style: 'cancel' },
      ])
    }
  }

  const renderItem = ({ item }: { item: Dog }) => {
    return (
      <Card
        item={item}
        onPress={() => navigation.navigate('Edit', { id: item.id })}
        isEdit={isEditMode}
        isChecked={item.isChecked}
        onItemChecked={(value) =>
          setDogs((prevState) =>
            prevState.map((dog) =>
              dog.id === item.id ? { ...dog, isChecked: value } : dog
            )
          )
        }
      />
    )
  }

  // hooks
  const filteredData = useMemo(() => {
    if (!dogs) return []

    return filterOptions ? filterDogs(filterOptions, dogs) : dogs
  }, [dogs, filterOptions])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        isEditMode ? (
          <Ionicons
            name='trash'
            size={26}
            color={colors.red}
            onPress={onDelete}
          />
        ) : (
          <Ionicons
            name='md-add-circle'
            size={26}
            color={colors.bronze.base}
            onPress={() => navigation.navigate('Edit')}
          />
        ),
      headerRight: () => (
        <Ionicons
          onPress={switchEditMode}
          name={isEditMode ? 'md-close-circle' : 'checkmark-done-circle-sharp'}
          size={24}
          color={isEditMode ? colors.red : colors.bronze.base}
        />
      ),
    })
  }, [navigation, isEditMode, dogs])

  return (
    <View style={tw.style('flex-1')}>
      <Filter value={filterOptions} onValueChange={setFilterOptions} />
      {isLoading ? (
        <ActivityIndicator color={colors.bronze.base} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  )
}

export default Home
