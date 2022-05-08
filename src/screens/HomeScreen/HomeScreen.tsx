import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import tw from '../../lib/tailwind'
import useGetDogs from '../../hooks/useGetDogs'
import { Dog } from '../../models/Dog'
import Card from '../../components/Card'
import Input from '../../components/Input'
import { filterDogs } from '../../lib/filter'

const Home = () => {
  const { data } = useGetDogs()
  const [searchCriteria, setSearchCriteria] = useState('')

  const renderItem = ({ item }: { item: Dog }) => {
    return <Card item={item} />
  }

  const filteredData = useMemo(() => {
    if (!data) return []

    return filterDogs(searchCriteria, data)
  }, [data, searchCriteria])

  return (
    <View style={tw.style('flex-1 p-4')}>
      <Input
        label='Search'
        value={searchCriteria}
        onChangeText={setSearchCriteria}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Home
