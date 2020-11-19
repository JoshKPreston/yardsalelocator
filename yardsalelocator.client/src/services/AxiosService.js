import Axios from 'axios'
import { authHeader } from '../AuthConfig'

const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const radarApi = Axios.create({
  baseURL: 'https://api.radar.io/v1',
  timeout: 8000
})

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const setAuth = function() {
  radarApi.defaults.headers.authorization = authHeader
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
  radarApi.defaults.headers.authorization = ''
}
