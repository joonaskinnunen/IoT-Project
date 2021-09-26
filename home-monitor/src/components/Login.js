import React from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

const Login = ( { loginService, setUsername, username, setPassword, password, setUser, setMessage, setMessagevariant } ) => {
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        "loggedUser", JSON.stringify(user)
      )

      loginService.setToken(user.token)
      setUser(user)
      setUsername("")
      setPassword("")
      setMessagevariant("success")
      setMessage(`${username} sisäänkirjautuminen onnistui!`)
    } catch (exception) {
      console.log(exception)
      setMessagevariant("danger")
      setMessage("Väärä käyttäjänimi tai salasana.")
    }
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <>
      <h3>Kirjaudu sisään</h3>
      <Row className="justify-content-center">
          <Col></Col>
          <Col>
        <Form onSubmit={handleLogin}>
            <Form.Label>Käyttäjänimi:</Form.Label>
            <Form.Control required value={username} key="1" onChange={({ target }) => setUsername(target.value)} />
            <Form.Label>Salasana:</Form.Label>
            <Form.Control required type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
          <Button variant="primary" type="submit" style={{marginTop: 10}}>
            Kirjaudu
          </Button>
        </Form>
        </Col>
        <Col></Col>
      </Row>
      <hr />
    </>  )
}

export default Login