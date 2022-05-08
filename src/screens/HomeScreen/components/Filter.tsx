import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CheckBox, Input } from '../../../components'
import { FilterOptions } from '../../../models/FilterOptions'
import tw from '../../../lib/tailwind'

interface FilterProps {
  value: FilterOptions
  onValueChange: (value: FilterOptions) => void
}
const Filter = ({ value, onValueChange }: FilterProps) => {
  const { criteria, active, inactive } = value
  return (
    <View style={tw.style('p-4')}>
      <Input
        label='Search'
        value={criteria}
        onChangeText={(text) =>
          onValueChange({
            criteria: text,
            active,
            inactive,
          })
        }
      />
      <View style={tw.style('flex-row justify-evenly')}>
        <CheckBox
          label='Active'
          value={active}
          onValueChange={(value) =>
            onValueChange({
              criteria,
              active: value,
              inactive,
            })
          }
        />
        <CheckBox
          label='Inactive'
          value={inactive}
          onValueChange={(value) =>
            onValueChange({
              criteria,
              active,
              inactive: value,
            })
          }
        />
      </View>
    </View>
  )
}

export default Filter
