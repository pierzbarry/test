import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/gtd_logo.png';

const Styles = styled.div`
  .navbar {
    height: 48px;
    background-color: #4F4D53 !important;
  }

  .navbar-brand {
    padding-left: 4rem;
  }
  // .navbar-header {
  //   background-color: 
  // }
`;

{/* <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> */}

const NavigationBar = () => (
  <Styles>
    <Navbar fixed="top" expand="lg" bg="light">
      <Navbar.Brand ></Navbar.Brand>

      <Col xs={8} className="mx-auto"><img src={logo} /></Col>

    </Navbar>
  </Styles >
)

export default NavigationBar;