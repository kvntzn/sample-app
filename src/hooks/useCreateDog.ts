import { useMutation, useQueryClient } from 'react-query'
import { EditableDog } from '../models/Dog'
import { createDog } from '../services/api'

const useCreateDog = () => {
  const queryClient = useQueryClient()
  return useMutation((values: EditableDog) => createDog(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(['dogs'])
    },
  })
}
export default useCreateDog
