const express = require('express')
const ewelink = require('ewelink-api')
require('dotenv').config();
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const temperatureRouter = require('./controllers/temperature')
const lightRouter = require('./controllers/light')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
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
app.use(express.static('build'))

app.use('/api/temperatures', temperatureRouter)
app.use('/api/lights', lightRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app