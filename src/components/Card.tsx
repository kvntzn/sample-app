import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { Dog } from '../models/Dog'
import CheckBox from './CheckBox'

interface CardProps {
  item: Dog
  onPress: () => void
  isEdit: boolean
  isChecked?: boolean
  onItemChecked: (value: boolean) => void
}

const Card = ({
  item,
  isEdit,
  onPress,
  isChecked = false,
  onItemChecked,
}: CardProps) => {
  return (
    <Pressable
      style={tw.style('w-full h-51 rounded-lg shadow-lg p-2 py-1')}
      onPress={() => {
        isEdit ? onItemChecked(!item.isChecked) : onPress()
      }}
    >
      <ImageBackground
        style={tw.style(
          'w-full h-full rounded-lg overflow-hidden justify-evenly'
        )}
        imageStyle={tw.style('w-full h-full rounded-lg')}
        resizeMode='cover'
        source={{ uri: `https://picsum.photos/200/100` }}
      >
        <View
          style={tw.style('flex-row w-full items-center justify-between pl-2')}
        >
          <Text
            style={tw.style('font-sans-bold opacity-80 text-white text-xl')}
          >
            {item.name}
          </Text>
        </View>

        <View>
          <Text style={tw.style('font-sans-bold  text-white opacity-70 pl-2')}>
            {item.description}
          </Text>
          <Text style={tw.style('font-serif-bold text-6 text-white mt-1 pl-2')}>
            {item.category}
          </Text>
          <View style={tw.style('flex-row mt-1 pl-2')}>
            <Text style={tw.style('font-sans-bold text-base text-white')}>
              {item.isActive ? 'Active' : 'Inactive'}
            </Text>
          </View>

          {isEdit ? (
            <View style={tw.style('self-end absolute bottom-0 right-3')}>
              <CheckBox value={isChecked} onValueChange={onItemChecked} />
            </View>
          ) : null}
        </View>
      </ImageBackground>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({})
