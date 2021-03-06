import axios from "axios"
const baseUrl = "/api/login"

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const logout = () => {
  window.localStorage.removeItem("loggedUser")
}

export default { login, logout, setToken }