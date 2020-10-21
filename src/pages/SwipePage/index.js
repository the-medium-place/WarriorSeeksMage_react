import React, { useEffect, useState } from 'react';
import './style.css';
import { Row, Col } from 'react-bootstrap';

import DragImg from '../../components/DragImg'
import API from '../../utils/API';

export default function Index() {

    const [usersList, setUsersList] = useState(null);
    const [currentPick, setCurrentPick] = useState(null);

    console.log(usersList);
    console.log(currentPick);
    useEffect(() => {
        API.getUserList().then(res => {
            // console.log(res.data)
            if (res.data) {
                setUsersList(res.data)
                console.log(usersList);
                const randomIndex = Math.floor(Math.random() * res.data.length - 1);
                setCurrentPick(res.data[randomIndex]);
            } else {
                console.log("loading");
            }
        })
        // eslint-disable-next-line
    }, [])

    const reloadPage = () => {
        window.location.reload();
    }

    // console.log(usersList);
    // console.log(currentPick);

    return (
        <div className="container">
            
            <Row>

                <Col s={12} className="img-div">
                    {currentPick ? (
                    <DragImg image={<img src={currentPick.image} className="swipe-img" alt="yes or no?"/>} />
                    ) : (
                    <DragImg image={<img src="http://placekitten.com/500/800" className="swipe-img" alt="placekitten"/>} />

                    )
                }


                </Col>

            </Row>
            <Row className="btn-row">
                <Col s={6} className="option-btn"><i class="fas fa-times-circle" onClick={reloadPage}></i></Col>
                {/* <Col s={4} className="option-btn"></Col> */}
                <Col s={6} className="option-btn"><i class="fas fa-heart" onClick={reloadPage}></i></Col>
            </Row>
            <Row>
                <Col s={12}>
                    { currentPick ? <h1>{currentPick.name}</h1> : <h1>loading...</h1>}
                    {/* <h1>User Name</h1> */}
                </Col>
            </Row>
            <hr />
            <Row>
                <Col s={12}>
                    { currentPick ? <h3>{currentPick.game}</h3> : <h3>loading...</h3>}
                    {/* <h3>User Game</h3> */}
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col s={12}>
                    { currentPick ? <h5>Experience Level: {currentPick.experience}</h5> : <h5>loading....</h5>}
                    {/* <h5>User Experience Level</h5> */}
                </Col>
            </Row>
            <hr />
            <Row>
                <Col s={12}>
                    { currentPick ? <p>{currentPick.bio}</p> : <p>loading....</p>}
                    {/* <p>Mixtape sustainable raclette chambray, godard ethical la croix live-edge quinoa. Jianbing neutra hammock, lomo poke you probably haven't heard of them enamel pin vegan mustache lumbersexual whatever shoreditch bushwick. Fam readymade kombucha, gentrify pour-over 8-bit knausgaard. Selvage photo booth keffiyeh 3 wolf moon pickled neutra tbh hell of tousled. Locavore chartreuse truffaut polaroid everyday carry.

Asymmetrical meditation man braid street art truffaut. Bespoke tacos shabby chic lyft glossier. Photo booth keytar vaporware hell of tacos yuccie. La croix selfies listicle wolf food truck, copper mug raw denim disrupt sartorial kogi.</p> */}
                </Col>
            </Row>


        </div>
    )
}
