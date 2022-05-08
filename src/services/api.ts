import axios from 'axios'
import { Dog, EditableDog } from '../models/Dog'

const instance = axios.create({
  baseURL: `http://localhost:3000/`,
})

const createDog = async (item: EditableDog) => {
  const response = await instance.post('/dogs', item)
  return response.data as Dog
}

const getDogs = async () => {
  const response = await instance.get('/dogs')
  return response.data as Dog[]
}

export { getDogs, createDog }
