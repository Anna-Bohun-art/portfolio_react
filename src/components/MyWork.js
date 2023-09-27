import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pokefight from "../img/img-1.png";
import cookBook from "../img/img-2.jpg";
import hackerNews from "../img/img-3.png";

export default function MyWork() {
  const handleCookBook=()=> {
    window.location.replace('https://github.com/Anna-Bohun-art/cookbook_frontend');
  }
  const handleHackerNews=()=> {
    window.location.replace('https://hackernews-1234.netlify.app/');
  }
  const handlePokeFight=()=> {
    window.location.replace('https://pokefight-126.netlify.app/');
  }
  return (
    <Container className="my-work">
      <h1 className="page-name">my projects</h1>
      <Row>
        <Col>
          <Card>
            <Card.Img className="project-img" variant="top" src={pokefight} alt="pokefight" />
            <Card.Body>
            <Card.Title>Pokefight</Card.Title>
            <Card.Text>
              Full stack MERN Application
            </Card.Text>
              <Button onClick={handlePokeFight} variant="danger">Check it out</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img  className="project-img" variant="top" src={hackerNews} alt="pokefight" />
            <Card.Body>
            <Card.Title>HackerNews</Card.Title>
            <Card.Text>
              Hacker news Front End API
            </Card.Text>
              <Button onClick={handleHackerNews} variant="danger">Check it out</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    <Row>
          <Col>
          <Card>
            <Card.Img  variant="top" src={cookBook} alt="pokefight" />
            <Card.Body>
            <Card.Title>Cookbook</Card.Title>
            <Card.Text>
              Full stack PERN Web Application
            </Card.Text>
              <Button variant="danger" onClick={handleCookBook}>Check it out</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col></Col>
        </Row>
    </Container>
  )
}
