import { useMutation, useQueryClient } from 'react-query'
import { EditableDog } from '../models/Dog'
import { updateDog } from '../services/api'
import { ToastAndroid, Platform, Alert } from 'react-native'

interface IUseEditDogProps {
  id: number
  fieldToUpdate: EditableDog
}

const notifyMessage = (msg: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    Alert.alert(msg)
  }
}

const useEditDog = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (values: IUseEditDogProps) => updateDog(values.id, values.fieldToUpdate),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(['dogs'])
        notifyMessage(`ID:${data.id} Name:${data.name} modified at ${data.date}`)
      },
    }
  )
}
export default useEditDog
