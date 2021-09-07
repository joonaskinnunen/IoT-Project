import axios from "axios"
const baseUrl = "/api/lights"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const toggleLight = async lightId => {

    const newObj = {lightId}

    const response = await axios.post(baseUrl, newObj)
    return response.data
  }

export default { getAll, toggleLight }
