import { useMutation, useQueryClient } from 'react-query'
import { EditableDog } from '../models/Dog'
import { updateDog } from '../services/api'

interface IUseEditDogProps {
  id: number
  fieldToUpdate: EditableDog
}

const useEditDog = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (values: IUseEditDogProps) => updateDog(values.id, values.fieldToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['dogs'])
      },
    }
  )
}
export default useEditDog
