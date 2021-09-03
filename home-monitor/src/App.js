import React, { useState, useEffect } from "react"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from "react-bootstrap"
import temperatureService from './services/temperatures'

function App() {

  const [temperatures, setTemperatures] = useState([])

  useEffect(() => {
    temperatureService
      .getAll()
      .then(initialTemperatures => {
        setTemperatures(initialTemperatures)
        console.log(initialTemperatures)
      })
  }, [])

  useEffect(() => {
    document.title = "Home Monitor"
  }, [])

  return (
    <Container fluid>
      <Header />
      <Footer />
    </Container>
  )
}

export default App
