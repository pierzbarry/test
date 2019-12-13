import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './comp.css';
import lisa from '../assets/img_lisa_circle.png';
import danielle from '../assets/img_danielle_circle.png';
import brian from '../assets/img_brian_circle.png';

const Home = () => {
  return (
    <React.Fragment>

        <div className="container">

        <Row className="raise justify-content-md-center">
          <Col xs={3}><img src={lisa} /></Col>
          <Col xs={3}><img src={danielle} /></Col>
          <Col xs={3}><img src={brian} /></Col>
        </Row>
        <Col xs={6} className="mx-auto"><h2>How it started</h2></Col>
        <Col xs={8} className="mx-auto"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt consequatur omnis doloremque quisquam adipisci qui a dicta veritatis eaque? Tempore architecto ipsa nam atque recusandae eos blanditiis tempora illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt consequatur omnis doloremque quisquam adipisci qui a dicta veritatis eaque? Tempore architecto ipsa nam atque recusandae eos blanditiis tempora illo?</p></Col>
        
      </div>

    </React.Fragment>
  )
}

export default Home;