import { FlatList, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import tw from '../../lib/tailwind'
import useGetDogs from '../../hooks/useGetDogs'
import { Dog } from '../../models/Dog'
import { filterDogs } from '../../lib/filter'
import { Card } from '../../components'
import Filter from './components/Filter'
import { FilterOptions } from '../../models/FilterOptions'
import { StackScreenProps } from '@react-navigation/stack'
import { RootNavigatorParamList } from '../../routes/type'

type HomeScreenProps = StackScreenProps<RootNavigatorParamList, 'Home'>

const Home = ({ navigation }: HomeScreenProps) => {
  const { data } = useGetDogs()

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    criteria: '',
    active: false,
    inactive: false,
  })

  const renderItem = ({ item }: { item: Dog }) => {
    return (
      <Card
        item={item}
        onPress={() => navigation.navigate('Edit', { id: item.id })}
      />
    )
  }

  const filteredData = useMemo(() => {
    if (!data) return []

    return filterOptions ? filterDogs(filterOptions, data) : data
  }, [data, filterOptions])

  return (
    <View style={tw.style('flex-1')}>
      <Filter value={filterOptions} onValueChange={setFilterOptions} />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Home
