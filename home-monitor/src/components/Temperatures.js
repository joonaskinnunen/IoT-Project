/* eslint-disable react/prop-types */
import React from "react"
import { Row, Col, Spinner } from "react-bootstrap"
import { Water, ThermometerOutline } from 'react-ionicons'

const Temperatures = ({ temperatures }) => {
    return (
            <Row>
                <h2 style={{marginBottom: '20px'}}>Lämpötila ja kosteus</h2>
                <Col></Col>
                <Col>
                    <div className="box">
                    <p>Lämpötila</p><ThermometerOutline color={'#29aae1'} height="100px" width="100px" /><p style={{ fontSize: '2em', fontWeight: 'bold' }}>{temperatures.length > 0 ? temperatures[temperatures.length - 1].temperature > 0 ? '+' + parseFloat(temperatures[temperatures.length - 1].temperature).toFixed(1).toString() + " °C" : '-' + parseFloat(temperatures[temperatures.length - 1].temperature).toFixed(1).toString() + " °C" : <Spinner animation="border" variant="info" />}</p>
                    </div>
                </Col>
                <Col>
                <div className="box">
                    <p>Ilmankosteus</p><Water color={'#29aae1'} height="100px" width="100px" /><p style={{ fontSize: '2em', fontWeight: 'bold' }}>{temperatures.length > 0 ? temperatures[temperatures.length - 1].humidity > 0 ? parseFloat(temperatures[temperatures.length - 1].humidity).toFixed(1).toString() + " %" : '-' + parseFloat(temperatures[temperatures.length - 1].humidity).toFixed(1).toString() + " %" : <Spinner animation="border" variant="info" />}</p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
    )
}

export default Temperatures
