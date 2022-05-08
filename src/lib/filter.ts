import { Dog } from '../models/Dog'

export const filterDogs = (criteria: string, dogs: Dog[]) => {
  return dogs.filter(
    (dog) =>
      dog.name.toLowerCase().includes(criteria.toLowerCase()) ||
      dog.description.toLowerCase().includes(criteria.toLowerCase()) ||
      dog.category.toLowerCase().includes(criteria.toLowerCase())
  )
}
