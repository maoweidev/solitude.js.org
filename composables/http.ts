import axios from 'axios'

const service = axios.create({
  timeout: 10000 * 12,
  headers: {
    Accept: 'application/json',
  },
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    if (response.status === 200)
      return Promise.resolve(response)

    return Promise.reject(response)
  },
  (error) => {
    if (error.response) {
      console.log(error.response.status, error.response.data);
      return Promise.reject(error.response)
    }
    else {
      console.log('请求超时，请检查网络连接')
    }
  },
)

export default service
