import axios from 'axios'


const api = axios.create({
  baseURL: 'https://be-the-hero-wes.herokuapp.com/'
})

export default api
