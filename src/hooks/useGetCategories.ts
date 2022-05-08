import { useQuery } from 'react-query'
import { getCategories } from '../services/category'

const useGetCategories = () => {
  return useQuery(['categories'], () => getCategories())
}

export default useGetCategories
