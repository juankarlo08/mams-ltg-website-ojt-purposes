import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PreOpeningPic from '../../img/pre-opening-pic.jpg';

const FranchiseProgramSection = () => {
  return (
    <Container fluid className='custom-x-padding py-5'>
        <Row className='mt-5 justify-content-center'>
            <Col className='mb-5' xxl={10}>
            <h1 className="display-4 fw-bold text-center">Franchise Programs</h1>
            <p className="lead text-muted text-center">Explore our flexible and rewarding franchise programs designed to help you start and grow your own successful microlending business.</p>
            </Col>
          </Row>
    <Row>
      <Col>  
       <Card className="shadow"style={{ width: '18rem' }}>
      <Card.Img variant="top" src={PreOpeningPic} />
      <Card.Body className='border-0'>
        <Card.Title>Pre-Opening Support</Card.Title>
      </Card.Body>
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Franchise Area Mapping & Survey</ListGroup.Item>
        <ListGroup.Item>Staff Recruitment Activities</ListGroup.Item>
        <ListGroup.Item>Branch Office Site Evaluation</ListGroup.Item>
        <ListGroup.Item>Certificate Course in Microlending</ListGroup.Item>
        <ListGroup.Item>Assistance On Business Registration & Licensing</ListGroup.Item>
        <ListGroup.Item>Office Refurbishment</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container>
  )
}

export default FranchiseProgramSection