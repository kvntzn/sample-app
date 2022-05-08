import { FlatList, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import tw from '../../lib/tailwind'
import useGetDogs from '../../hooks/useGetDogs'
import { Dog } from '../../models/Dog'
import { filterDogs } from '../../lib/filter'
import { Card, Input, CheckBox } from '../../components'
import Filter from './components/Filter'
import { FilterOptions } from '../../models/FilterOptions'

const Home = () => {
  const { data } = useGetDogs()

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    criteria: '',
    active: false,
    inactive: false,
  })

  const renderItem = ({ item }: { item: Dog }) => {
    return <Card item={item} />
  }

  const filteredData = useMemo(() => {
    if (!data) return []

    return filterOptions ? filterDogs(filterOptions, data) : data
  }, [data, filterOptions])

  return (
    <View style={tw.style('flex-1 p-4')}>
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
