/* eslint-disable react/prop-types */
import React from "react"
import { Row, Col, Spinner } from "react-bootstrap"
import { Water, ThermometerOutline } from 'react-ionicons'

const Temperatures = ({ temperatures }) => {
    console.log(temperatures)

    return (
            <Row>
                <h2>Lämpötila ja kosteus</h2>
                <Col></Col>
                <Col>
                    <div class="box">
                    <p>Lämpötila</p><ThermometerOutline color={'#29aae1'} height="120px" width="120px" /><p style={{ fontSize: (35), fontWeight: 'bold' }}>{temperatures.length > 0 ? temperatures[temperatures.length - 1].temperature > 0 ? '+' + parseFloat(temperatures[temperatures.length - 1].temperature).toFixed(1).toString() + " °C" : '-' + parseFloat(temperatures[temperatures.length - 1].temperature).toFixed(1).toString() + " °C" : <Spinner animation="border" variant="info" />}</p>
                    </div>
                </Col>
                <Col>
                <div class="box">
                    <p>Ilmankosteus</p><Water color={'#29aae1'} height="120px" width="120px" /><p style={{ fontSize: (35), fontWeight: 'bold' }}>{temperatures.length > 0 ? temperatures[temperatures.length - 1].humidity > 0 ? parseFloat(temperatures[temperatures.length - 1].humidity).toFixed(1).toString() + " %" : '-' + parseFloat(temperatures[temperatures.length - 1].humidity).toFixed(1).toString() + " %" : <Spinner animation="border" variant="info" />}</p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
    )
}

export default Temperatures
