import { useMutation, useQueryClient } from 'react-query'
import { deleteDog } from '../services/api'

const deleteDogs = async (ids: number[]) => {
  for (const id of ids) {
    await deleteDog(id)
  }
}

const useDeleteDogs = () => {
  const queryClient = useQueryClient()
  return useMutation((values: number[]) => deleteDogs(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(['dogs'])
    },
  })
}
export default useDeleteDogs
