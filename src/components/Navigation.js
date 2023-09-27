import React from 'react';
import logo from "../img/logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
            <Row>
                <Col xs={4}>
                    <Link to="/">
                        <img className="logo" src={logo} alt="logo"></img>
                    </Link>
                </Col>
                <Col>
                    <Link className="nav-link" to="/my-expertises">
                        <h5 className="text-capitalize">My experience</h5>
                    </Link>
                </Col>
                <Col>
                    <Link className="nav-link" to="/my-projects">
                        <h5 className="text-capitalize">My Projects</h5>
                    </Link>
                </Col>
                <Col>
                    <Link className="nav-link" to="/contact-form">
                        <h5 className="text-capitalize">Contact me</h5>
                    </Link>
                </Col> 
            </Row>
        </Container>
    );
}

export default Navigation;
