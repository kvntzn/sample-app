import { useQuery } from 'react-query'
import { getDogs } from '../services/api'

const useGetDogs = () => {
  return useQuery(['dogs'], () => getDogs())
}

export default useGetDogs
