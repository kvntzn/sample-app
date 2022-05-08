import { useQuery, UseQueryOptions } from 'react-query'
import { Dog } from '../models/Dog'
import { getDog } from '../services/api'

const useGetDog = (
  values?: number,
  options?: UseQueryOptions<Dog | undefined>
) => {
  return useQuery<Dog | undefined>(
    ['dog', values],
    () => (values ? getDog(values) : undefined),
    options
  )
}

export default useGetDog
