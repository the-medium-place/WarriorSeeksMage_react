import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './style.css';


export default function Index() {

    const [userType, setUserType] = useState(null)
    const [userInfo, setUserInfo] = useState({
        name: null,
        password: null,
        email: null,
        experience: 3,
        game: null,
        bio: null,
        image: null
    })

    let expLabel;
    const displayExpLabel = () => {
        switch (userInfo.experience){
            case 1:
                console.log(userInfo.experience)
                break;
            case 2:
                console.log(userInfo.experience)
                break;
            case 3:
                console.log(userInfo.experience)
                break;
            case 4:
                console.log(userInfo.experience) 
                break;
            case 5:
                console.log(userInfo.experience) 
                break;
            default:
                break;
        }
    }
    displayExpLabel();

    return (
        <div className="container">
            <Row>
                <Col s={12} className="text-center">
                    <h1>Sign Up!!</h1>
                </Col>
            </Row>

            { !userType ?
                <Row>
                    {/* <Col s={2}></Col> */}
                    <Col>
                        <Form>
                            <Form.Group controlId="SelectCustom">
                                <Form.Label>Let's get started!</Form.Label>
                                <Form.Control
                                    as="select"
                                    // custom 
                                    onChange={(e) => { setUserType(e.target.value) }}
                                    >
                                    <option selected disabled>I am a...</option>
                                    <option>Player seeking new party</option>
                                    <option>Party seeking new member</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    {/* <Col s={2}></Col> */}
                </Row> :
                <>
                    { userType === 'Player seeking new party' ?
                        <Form>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Choose a username" 
                                    onChange={
                                    (e) => { 
                                        const val = e.target.value;
                                        setUserInfo(prevState => {
                                            return { ...prevState, name: val}
                                        }) 
                                    }}
                                    />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    onChange={
                                        (e) => { 
                                            const val = e.target.value;
                                            setUserInfo(prevState => {
                                                return { ...prevState, email: val}
                                            }) 
                                        }}
                                    />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    onChange={
                                        (e) => { 
                                            const val = e.target.value;
                                            setUserInfo(prevState => {
                                                return { ...prevState, password: val}
                                            }) 
                                        }}
                                    />
                            </Form.Group>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>Select Exp Level:</Form.Label>
                                <Form.Control 
                                    type="range" 
                                    min="1" 
                                    max="5" 
                                    defaultValue="3"
                                    step="1"
                                    onChange={
                                        (e) => { 
                                            const val = e.target.value;
                                            setUserInfo(prevState => {
                                                return { ...prevState, experience: val}
                                            }) 
                                        }}
                                    />
                                {userInfo.experience === 5 ?
                                <Form.Text className="text-muted">
                                   5 - I'm a Super Dungeon Master
                                </Form.Text> : <></>
                                }
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form> :
                        <><h1>team looking for member</h1></>
                    }
                </>
            }
        </div>
    )

}
