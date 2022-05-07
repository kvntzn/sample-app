import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import useGetDogs from '../../hooks/useGetDogs'

const Home = () => {
  const { data } = useGetDogs()

  return (
    <View style={tw.style('flex-1 bg-red p-4')}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  )
}

export default Home
