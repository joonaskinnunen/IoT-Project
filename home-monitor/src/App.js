import React, { useState, useEffect } from "react"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Temperatures from './components/Temperatures'
import Lights from './components/Lights'
import Login from './components/Login'
import { Container } from "react-bootstrap"
import MessageAlert from "./components/MessageAlert"
import temperatureService from './services/temperatures'
import lightService from './services/lights'
import loginService from "./services/login"

function App() {

  const [temperatures, setTemperatures] = useState([])
  const [lights, setLights] = useState([])
  const [lightStates, setLightStates] = useState({ 0: false, 1: false, 2: false, 3: false })
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [messageVariant, setMessageVariant] = useState("")

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedpUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      loginService.setToken(user.token)
    }
  }, [])


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

  const handleLogout = () => {
    loginService.logout()
    setUser(null)
    setMessageVariant("success")
    setMessage("Uloskirjautuminen onnistui")
    setTimeout(() => {
      setMessage("")
    }, 3000)
  }

  return (
    <Container fluid>
      <Header user={user} />
      {user !== null ? <Temperatures temperatures={temperatures} /> : <Login loginService={loginService} user={user} setUser={setUser} username={username} setUsername={setUsername} password={password} setPassword={setPassword} setMessage={setMessage} setMessagevariant={setMessageVariant} />}
      <hr></hr>
      {user !== null ? <Lights lights={lights} lightStates={lightStates} setLightStates={setLightStates} logout={handleLogout} /> : <></>}
      <div style={{ width: "300px", margin: "auto" }}>
          <MessageAlert message={message} messageVariant={messageVariant} />
      </div>
      <Footer />
    </Container>
  )
}

export default App