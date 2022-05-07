import axios from 'axios'
import { Dog } from '../models/Dog'

const instance = axios.create({
  baseURL: `http://localhost:3000/`,
})

const createPost = () => {}

const getDogs = async () => {
  const response = await instance.get('/dogs')
  return response.data as Dog[]
}

export { getDogs }
