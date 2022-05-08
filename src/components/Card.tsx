import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { Dog } from '../models/Dog'

interface ICardProps {
  item: Dog
}

const Card = ({ item }: ICardProps) => {
  return (
    <View style={tw.style('w-full h-51 rounded-lg shadow-lg my-1')}>
      <ImageBackground
        style={tw.style(
          'w-full h-full rounded-lg overflow-hidden justify-evenly p-2'
        )}
        imageStyle={tw.style('w-full h-full rounded-lg')}
        resizeMode='cover'
        source={{ uri: 'https://picsum.photos/200/300' }}
      >
        <View style={tw.style('flex-row w-full items-center justify-between')}>
          <Text
            style={tw.style('font-sans-bold opacity-80 text-white text-xl')}
          >
            {item.name}
          </Text>
        </View>

        <View>
          <Text style={tw.style('font-sans-bold  text-white opacity-70')}>
            {item.description}
          </Text>
          <Text style={tw.style('font-serif-bold text-6 text-white mt-1')}>
            {item.category}
          </Text>
          <View style={tw.style('flex-row mt-1')}>
            <Text style={tw.style('font-sans-bold text-base text-white')}>
              {item.isActive}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})
