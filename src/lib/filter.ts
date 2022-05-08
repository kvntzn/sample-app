import { Dog } from '../models/Dog'
import { FilterOptions } from '../models/FilterOptions'

export const filterDogs = (filterOptions: FilterOptions, dogs: Dog[]) => {
  const { criteria, active, inactive } = filterOptions
  let filteredDogs = dogs
  filteredDogs = dogs.filter(
    (dog) =>
      dog.name.toLowerCase().includes(criteria.toLowerCase()) ||
      dog.description.toLowerCase().includes(criteria.toLowerCase()) ||
      dog.category.toLowerCase().includes(criteria.toLowerCase())
  )

  if (active && inactive) {
    return filteredDogs
  }

  if (active) {
    filteredDogs = filteredDogs.filter((dog) => dog.isActive)
  }

  if (inactive) {
    filteredDogs = filteredDogs.filter((dog) => dog.isActive === false)
  }

  return filteredDogs
}
