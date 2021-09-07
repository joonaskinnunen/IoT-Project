import React, { useState, useEffect } from "react"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Temperatures from './components/Temperatures'
import Lights from './components/Lights'
import { Container } from "react-bootstrap"
import temperatureService from './services/temperatures'
import lightService from './services/lights'

function App() {

  const [temperatures, setTemperatures] = useState([])
  const [lights, setLights] = useState([])
  const [lightStates, setLightStates] = useState({ 0: false, 1: false, 2: false, 3: false })

  useEffect(() => {
    temperatureService
      .getAll()
      .then(initialTemperatures => {
        setTemperatures(initialTemperatures)
        console.log(initialTemperatures)
      })
  }, [])

  useEffect(() => {
    lightService
      .getAll()
      .then(initialLights => {
        setLights(initialLights)
        console.log(initialLights)
        const newLightStates = {
          0: initialLights[0].params.state == "on" ? true : false,
          1: initialLights[1].params.switch == "on" ? true : false,
          2: initialLights[2].params.state == "on" ? true : false,
          3: initialLights[3].params.switch == "on" ? true : false,
        }
        setLightStates(newLightStates)
        console.log(newLightStates)
      })
  }, [])

  useEffect(() => {
    document.title = "Home Monitor"
  }, [])

  return (
    <Container fluid>
      <Header />
      <Temperatures temperatures={temperatures} />
      <hr></hr>
      <Lights lights={lights} lightStates={lightStates} setLightStates={setLightStates} />
      <Footer />
    </Container>
  )
}

export default App
