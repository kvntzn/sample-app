import { useQuery, UseQueryOptions } from 'react-query'
import { Dog } from '../models/Dog'
import { getDogs } from '../services/api'

const useGetDogs = (options?: UseQueryOptions<Dog[]>) => {
  return useQuery<Dog[]>(['dogs'], () => getDogs(), options)
}

export default useGetDogs
