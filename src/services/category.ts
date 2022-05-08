import axios from 'axios'

const instance = axios.create({
  baseURL: `http://localhost:3001/`,
})

const getCategories = async () => {
  const response = await instance.get('/category')
  return response.data as string[]
}

export { getCategories }
