const ewelink = require('ewelink-api')
const lightRouter = require('express').Router()
require('dotenv').config()

lightRouter.get('/', async (request, response) => {
  (async () => {
  
  const connection = new ewelink({
    email: process.env.EWEEMAIL,
    password: process.env.EWEPWD,
    region: 'eu'
  })

  const devices = await connection.getDevices()
  console.log(devices)
  
  return response.json(devices)
  
  })();
})

lightRouter.post('/', async (request, response) => {
  const body = request.body
  if (body.lightId === undefined) {
    return response.status(400).json({ error: 'Light ID missing' })
  }

  (async () => {
  const connection = new ewelink({
    email: process.env.EWEEMAIL,
    password: process.env.EWEPWD,
    region: 'eu'
  })

  const devices = await connection.getDevices()
  console.log(devices)
  
  const res = await connection.toggleDevice(body.lightId)
  console.log(res)
  if(res.error == 404) {
    return response.status(404).json({ error: res.msg})
  }
  return res.status
  
  })();
  
})

module.exports = lightRouter