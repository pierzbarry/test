import React from 'react';
import { Jumbotron as Jumbo, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import portfolioBG from '../assets/img_hero.jpg';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  .jumbo {
    background: url(${portfolioBG}) 100% 100%;
    background-size: cover;
    color: #efefef;
    height: 600px;
    z-index: -2;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 100px;
    color: #4F4D53;
  }

  .container {
    position: relative;
    top: 180px;
  }


`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <Container>
        <Col xs={10} className="mx-auto"><h1>Hello, We're gtd.</h1></Col>
      </Container>
    </Jumbo>

  </Styles>
)

export default Jumbotron;