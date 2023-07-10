import axios from 'axios'

// In a real application, the API_KEY could be stored in a .env file
const API_KEY = 'XaU5FKeSeZitAgWyVkdMQDzmMZnYo2So'

const baseURL = (endpoint = '', parameters = '') =>
  `https://api.nytimes.com/svc/books/v3/${endpoint}?${parameters}api-key=${API_KEY}`

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(config => {
  config.url = baseURL(config.url, config.params)
  return config
})

export default axiosInstance
