import axios from "axios";

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com'
})

export const signup = (data) => {
  console.log(data)
  return authInstance.post('/users/signup', data)
}