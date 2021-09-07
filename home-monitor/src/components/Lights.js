import React from "react"
import { Row, Col, Spinner } from "react-bootstrap"
import { Bulb, BulbOutline } from 'react-ionicons'
import Switch from '@material-ui/core/Switch';
import lightService from '../services/lights'

const Lights = ({ lights, lightStates, setLightStates }) => {
    console.log(lights)

    const toggleLight = (event) => {
        lightService.toggleLight(lights[event.target.name].deviceid)
        console.log(lights[event.target.name].deviceid)
        setLightStates({ ...lightStates, [event.target.name]: event.target.checked })
      }

    return (
        <div class="lights">
        <Row>
            <h2>Valot</h2>
            <Col></Col>
            <Col>
            <div class="box">
                <p>Makuuhuone</p>{lights.length > 0 ? lightStates["0"] ? <Bulb color={'#edff66'} height="120px" width="120px" /> : <BulbOutline color={'#000000'} height="120px" width="120px" /> : <Spinner animation="border" variant="info" />}
                <p><Switch name="0" onChange={toggleLight} checked={lightStates["0"]} /></p>
                </div>
                <div class="box">
                <p>Olohuone</p>{lights.length > 0 ? lightStates["1"] ? <Bulb color={'#edff66'} height="120px" width="120px" /> : <BulbOutline color={'#000000'} height="120px" width="120px" /> : <Spinner animation="border" variant="info" />}
                <p><Switch name="1" onChange={toggleLight} checked={lightStates["1"]} /></p>
                </div>
            </Col>
            <Col>
            <div class="box">
                <p>Kylpyhuone</p>{lights.length > 0 ? lightStates["2"] ? <Bulb color={'#edff66'} height="120px" width="120px" /> : <BulbOutline color={'#000000'} height="120px" width="120px" /> : <Spinner animation="border" variant="info" />}
                <p><Switch name="2" onChange={toggleLight} checked={lightStates["2"]} /></p>
                </div>
                <div class="box">
                <p>Pöytävalo</p>{lights.length > 0 ? lightStates["3"] ? <Bulb color={'#edff66'} height="120px" width="120px" /> : <BulbOutline color={'#000000'} height="120px" width="120px" /> : <Spinner animation="border" variant="info" />}
                <p><Switch name="3" onChange={toggleLight} checked={lightStates["3"]} /></p>
                </div>
            </Col>
            <Col></Col>
        </Row>
        </div>
    )
}

export default Lights