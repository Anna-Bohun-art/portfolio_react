import React from 'react';
//import greatingsImg from "../img/background.png";
import me from "../img/Iam.jpg";
import linkedin_icon from "../img/linkedin_icon.png";
import github_icon from "../img/github_icon.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Slide, Fade, JackInTheBox } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";


 function Greetings() {
  return (
        <Container className="greetings">
            <Row>
                <Col xs={6} >
                    <img className="myself" src={me} alt="I am"></img>
                </Col>
                <Col className="greeting-text">
                    <Slide>
                        <h4>WELCOME! </h4>
                    </Slide>
                    <h5> I am Anna</h5>
                    <Fade>
                        <h4>
                            Full Stack Web Developer
                        </h4>
                    </Fade>
                    {/*<Link to="/contact">*/}
                    {/*</Link>*/}
                    <Row className="greetingslink-row">
                        <Col>
                            <a href="https://www.linkedin.com/in/annabohun83/">
                                <img className="linkedin_icon"src={linkedin_icon} alt="linkedin"></img>
                            </a>
                        </Col>
                        <Col>
                            <a className="p-2" href="https://github.com/Anna-Bohun-art?tab=repositories">
                                <img className="github_icon" src={github_icon} alt="github"></img>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <JackInTheBox>
                        <NavLink to="/contact">
                            <h4 className="lets">
                                let's create our next awesome project together!
                            </h4>
                        </NavLink>
                    </JackInTheBox>
            </Row>
        </Container>
    );
}
export default Greetings;