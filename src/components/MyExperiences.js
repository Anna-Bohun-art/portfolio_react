import React from 'react';
import webDesign from "../img/web-design.png";
import backEnd from "../img/coding.png";
import methodologies from "../img/solution.png";
import tools from "../img/tools.png"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MyExperiences() {
  return (
      <Container className="my-expertise">
        <h2 className="page-name">my experience</h2>
        <Row>
          <Col>
            <Card className="my-expertise-card">
              <Card.Img className="web-design" variant="top" src={webDesign} alt="pokefight" />
              <Card.Body>
              <Card.Title>Front End</Card.Title>
              <Card.Text>
                    <ul className="myexperience-ul px-0">
                      <li>Vanilla JS</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>React.js</li>
                      <li>API</li>
                      <li>Vue.js</li>
                      <li>React</li>
                    </ul>
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-expertise-card">
              <Card.Img className="back-end" variant="top" src={backEnd} alt="pokefight" />
              <Card.Body>
                <Card.Title>Back End</Card.Title>
                <Card.Text>
                      <ul className="myexperience-ul px-0">
                        <li>Node JS</li>
                        <li>Express JS</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>Java</li>
                        <li>Spring Boot</li>
                      </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-expertise-card">
              <Card.Img className="methodologies" variant="top" src={methodologies} alt="pokefight" />
              <Card.Body>
                <Card.Title>Methodologies</Card.Title>
                <Card.Text>
                    <ul className="myexperience-ul px-0">
                      <li>Git</li>
                      <li>UI/UX design</li>
                      <li>Pair&nbsp;programming</li>
                      <li>Project&nbsp;management</li>
                    </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-expertise-card">
              <Card.Img className="tools" variant="top" src={tools} alt="pokefight" />
              <Card.Body>
                <Card.Title>Tools</Card.Title>
                <Card.Text>
                    <ul className="myexperience-ul px-0">
                      <li>Adobe CC</li>
                      <li>AWS Amplify</li>
                      <li>Figma</li>
                      <li>Github</li>
                      <li>Tailwind</li>
                      <li>Bootstrap</ li>
                      <li>React UI</li>
                    </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}
