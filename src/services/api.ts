import axios from 'axios'
import { Dog, EditableDog } from '../models/Dog'

const instance = axios.create({
  baseURL: `http://localhost:3000/`,
})

const createDog = async (item: EditableDog) => {
  const response = await instance.post('/dogs', item)
  return response.data as Dog
}

const updateDog = async (id: number, item: EditableDog) => {
  const response = await instance.put(`/dogs/${id}`, item)
  return response.data as Dog
}

const deleteDog = async (id: number) => {
  const response = await instance.delete(`/dogs/${id}`)
  return response.data
}

const getDogs = async () => {
  const response = await instance.get('/dogs')
  return response.data as Dog[]
}

const getDog = async (id: number) => {
  const response = await instance.get(`/dogs/${id}`)
  return response.data as Dog
}

export { getDogs, createDog, updateDog, deleteDog, getDog }
