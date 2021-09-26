import React from "react"
import { Row, Col, Spinner } from "react-bootstrap"
import { Bulb, BulbOutline } from 'react-ionicons'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import lightService from '../services/lights'

const Lights = ({ lights, lightStates, setLightStates }) => {
    console.log(lights)

    const toggleLight = (event) => {
        lightService.toggleLight(lights[event.target.name].deviceid)
        console.log(lights[event.target.name].deviceid)
        setLightStates({ ...lightStates, [event.target.name]: event.target.checked })
    }

    const LightSwitch = withStyles((theme) => ({
        root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
        },
        switchBase: {
            padding: 1,
            '&$checked': {
                transform: 'translateX(16px)',
                color: theme.palette.common.white,
                '& + $track': {
                    backgroundColor: '#52d869',
                    opacity: 1,
                    border: 'none',
                },
            },
            '&$focusVisible $thumb': {
                color: '#52d869',
                border: '6px solid #fff',
            },
        },
        thumb: {
            width: 24,
            height: 24,
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
    }))(({ classes, ...props }) => {
        return (
            <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        );
    });

    return (
        <div className="lights">
            <Row>
                <h2 style={{marginBottom: '20px'}}>Valot</h2>
                <Col></Col>
                <Col>
                    <div className="box">
                        <p>Makuuhuone</p>{lights.length > 0 ? lightStates["0"] ? <Bulb color={'#edff66'} height="120px" width="120px" /> : <BulbOutline color={'#000000'} height="120px" width="120px" /> : <Spinner animation="border" variant="info" />}
                        <p><LightSwitch name="0" onChange={toggleLight} checked={lightStates["0"]} /></p>
                    </div>
                    <div className="box">
                        <p>Olohuone</p>{lights.length > 0 ? lightStates["1"] ? <Bulb color={'#edff66'} height="120px" width="120px" /> : <BulbOutline color={'#000000'} height="120px" width="120px" /> : <Spinner animation="border" variant="info" />}
                        <p><LightSwitch name="1" onChange={toggleLight} checked={lightStates["1"]} /></p>
                    </div>
                </Col>
                <Col>
                    <div className="box">
                        <p>Kylpyhuone</p>{lights.length > 0 ? lightStates["2"] ? <Bulb color={'#edff66'} height="120px" width="120px" /> : <BulbOutline color={'#000000'} height="120px" width="120px" /> : <Spinner animation="border" variant="info" />}
                        <p><LightSwitch name="2" onChange={toggleLight} checked={lightStates["2"]} /></p>
                    </div>
                    <div className="box">
                        <p>Pöytävalo</p>{lights.length > 0 ? lightStates["3"] ? <Bulb color={'#edff66'} height="120px" width="120px" /> : <BulbOutline color={'#000000'} height="120px" width="120px" /> : <Spinner animation="border" variant="info" />}
                        <p><LightSwitch name="3" onChange={toggleLight} checked={lightStates["3"]} /></p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Lights