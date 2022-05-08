import { filterDogs } from '../../src/lib/filter'
import { Dog } from '../../src/models/Dog'
import { FilterOptions } from '../../src/models/FilterOptions'

it('should return filtered data', () => {
  const data: Dog[] = [
    {
      id: 1,
      name: 'Max',
      description: 'funny belgian malinois dog',
      category: 'guard',
      isActive: true,
    },
    {
      id: 2,
      name: 'Pochie',
      description: 'old dog',
      category: 'family',
      isActive: false,
    },
  ]
  const filterOptions: FilterOptions = {
    criteria: 'Max',
    active: true,
    inactive: false,
  }
  const result = filterDogs(filterOptions, data)
  expect(result).toStrictEqual([data[0]])
})
