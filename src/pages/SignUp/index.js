import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import API from '../../utils/API';
import './style.css';


export default function Index() {

    const [userType, setUserType] = useState(null)
    const [userInfo, setUserInfo] = useState({
        name: null,
        password: null,
        email: null,
        experience: "3",
        game: null,
        bio: null,
        image: null
    })
    const [partyInfo, setPartyInfo] = useState({
        partyName: null,
        email: null,
        game: null,
        seeking: null,
        bio: null,
        image: null
    })

    const handleUserSave = (event) => {
        event.preventDefault();
        console.log(userInfo);
        API.saveUser(userInfo)
        .then(dbResult => {
            console.log(dbResult);
            window.location.href= '/login';
        })
    }

    const handlePartySave = (event) => {
        event.preventDefault();
        console.log(partyInfo);
        API.saveParty(partyInfo)
        .then(dbResult => {
            console.log(dbResult);
            window.location.href= '/login';
        })
    }

    return (
        <div className="container">
            <Row>
                <Col s={12} className="text-center">
                    <h1>Sign Up!!</h1>
                </Col>
            </Row>

            {!userType ? // BEGIN userType TERNARY
                <Row>
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
                </Row> :


                // BEGIN NEW PLAYER FORM
                // =================================================
                <>
                    { userType === 'Player seeking new party' ?
                        <Form onSubmit={handleUserSave}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Choose a username"
                                    onChange={
                                        (e) => {
                                            const val = e.target.value;
                                            setUserInfo(prevState => {
                                                return { ...prevState, name: val }
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
                                                return { ...prevState, email: val }
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
                                                return { ...prevState, password: val }
                                            })
                                        }}
                                />
                            </Form.Group>
                            <Row>
                            </Row>
                            <Form.Row className="radio-select">
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radio-group" id="radio1" value="1"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setUserInfo(prevState => {
                                                    return { ...prevState, experience: val }
                                                })
                                            }}
                                    />
                                    <label className="form-check-label" for="radio1">1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radio-group" id="radio2" value="2"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setUserInfo(prevState => {
                                                    return { ...prevState, experience: val }
                                                })
                                            }}
                                    />
                                    <label className="form-check-label" for="radio2">2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radio-group" id="radio3" value="3"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setUserInfo(prevState => {
                                                    return { ...prevState, experience: val }
                                                })
                                            }}
                                    />
                                    <label className="form-check-label" for="radio3">3</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radio-group" id="radio4" value="4"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setUserInfo(prevState => {
                                                    return { ...prevState, experience: val }
                                                })
                                            }}
                                    />
                                    <label className="form-check-label" for="radio4">4</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radio-group" id="radio5" value="5"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setUserInfo(prevState => {
                                                    return { ...prevState, experience: val }
                                                })
                                            }}
                                    />
                                    <label className="form-check-label" for="radio5">5</label>
                                </div>
                            </Form.Row>

                            <Form.Group controlId="formBasicGame">
                                <Form.Label>What are you playing?</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Game"
                                    onChange={
                                        (e) => {
                                            const val = e.target.value;
                                            setUserInfo(prevState => {
                                                return { ...prevState, game: val }
                                            })
                                        }}
                                />
                            </Form.Group>
                            <div className="mb-3">
                                <Form.File id="formcheck-api-regular">
                                    <Form.File.Label>Select profile image: </Form.File.Label>
                                    <Form.File.Input
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setUserInfo(prevState => {
                                                    return { ...prevState, image: val }
                                                })
                                            }}
                                    />
                                </Form.File>
                            </div>
                            <Form.Group controlId="ControlTextarea1">
                                <Form.Label>Bio:</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                    onChange={
                                        (e) => {
                                            const val = e.target.value;
                                            setUserInfo(prevState => {
                                                return { ...prevState, bio: val }
                                            })
                                        }}
                                />
                            </Form.Group>
                            <Row>
                                <Col s={2}></Col>
                                <Col s={8}>

                                    <Button variant="primary" type="submit">
                                        Submit
                                </Button>
                                </Col>
                                <Col s={2}></Col>
                            </Row>
                        </Form> :



                        // BEGIN NEW TEAM FORM
                        // =================================================
                        <>
                            <Form onSubmit={handlePartySave}>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Party Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Choose a username"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setPartyInfo(prevState => {
                                                    return { ...prevState, partyName: val }
                                                })
                                            }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Primary email address: </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setPartyInfo(prevState => {
                                                    return { ...prevState, email: val }
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
                                                    return { ...prevState, password: val }
                                                })
                                            }}
                                    />
                                </Form.Group>
                                <Row>
                                </Row>

                                <Form.Group controlId="formBasicGame">
                                    <Form.Label>What are you playing?</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Game"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setPartyInfo(prevState => {
                                                    return { ...prevState, game: val }
                                                })
                                            }}
                                    />
                                </Form.Group>
                                <div className="mb-3">
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label>Select profile image: </Form.File.Label>
                                        <Form.File.Input
                                            onChange={
                                                (e) => {
                                                    const val = e.target.value;
                                                    setPartyInfo(prevState => {
                                                        return { ...prevState, image: val }
                                                    })
                                                }}
                                        />
                                    </Form.File>
                                </div>
                                <Form.Group controlId="ControlTextarea1">
                                    <Form.Label>What do you seek? </Form.Label>
                                    <Form.Control as="textarea" rows="3"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setPartyInfo(prevState => {
                                                    return { ...prevState, seeking: val }
                                                })
                                            }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="ControlTextarea1">
                                    <Form.Label>Party bio: </Form.Label>
                                    <Form.Control as="textarea" rows="3"
                                        onChange={
                                            (e) => {
                                                const val = e.target.value;
                                                setPartyInfo(prevState => {
                                                    return { ...prevState, bio: val }
                                                })
                                            }}
                                    />
                                </Form.Group>
                                <Row>
                                    <Col s={2}></Col>
                                    <Col s={8}>

                                        <Button variant="primary" type="submit">
                                            Submit
                                </Button>
                                    </Col>
                                    <Col s={2}></Col>
                                </Row>
                            </Form>
                        </> // END NEW TEAM FORM



                    }
                </> // END NEW PAYER FORM
                // END userType TERNARY
            }
        </div> // END .container
    )
}
