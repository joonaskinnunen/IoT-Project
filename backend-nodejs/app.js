const express = require('express')
const ewelink = require('ewelink-api')
require('dotenv').config();
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const temperatureRouter = require('./controllers/temperature')
const lightRouter = require('./controllers/light')
require('dotenv').config()

console.log('connecting to', process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json());

(async () => {

const connection = new ewelink({
  email: process.env.EWEEMAIL,
  password: process.env.EWEPWD,
  region: 'eu'
})

await connection.getCredentials();

const socket = await connection.openWebSocket(async data => {
  console.log(data)
});

})();

app.use('/api/temperatures', temperatureRouter)
app.use('/api/light', lightRouter)

module.exports = app