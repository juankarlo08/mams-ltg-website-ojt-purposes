import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab, ListGroup, Badge } from "react-bootstrap";
import PreOpeningPic from '../../img/pre-opening-pic.jpg';
import FranchiseTrainingPic from '../../img/franchise-training-pic.jpg';
import MarketingSupportPic from '../../img/marketing-support-pic.jpg';
import './FranchiseProgramSection.css';

const FranchiseProgramSection = () => {
  return (
    <Container fluid className="custom-x-padding py-5">
    <Row className='mt-5 justify-content-center'>
           <Col className='mb-5' xxl={10}>
            <h1 className="display-4 fw-bold text-center">Franchise Programs</h1>
            <p className="lead text-muted text-center">Explore our flexible and rewarding franchise programs designed to help you start and grow your own successful microlending business.</p>
             </Col>
    </Row>

    <Row>
      <Col lg={6}>
      <Card className="mb-4 rounded-5 border">
         <Card.Img variant="top" src={PreOpeningPic} className="franchise-card-img"/>
          <Card.Body>
            <h5>Pre-Opening Support</h5>
            <p className="text-muted">We conducted franchise area mapping and surveys, 
              carried out staff recruitment activities, evaluated branch office sites, 
              offered a certificate course in microlending, provided assistance with 
              business registration and licensing, and completed office refurbishment.</p>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={6}>
      <Card className="mb-4">
          <Card.Body>
            <h5>Opening Support</h5>
            <p className="text-muted">We performed detailed area mapping, 
              guided the business roll-out, facilitated systems installation 
              and orientation, and organized a branch blessing on opening day.</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col md={4}>
        <Card className="mb-4">
          <Card.Body>
            <h5>Continuing Support</h5>
            <p className="text-muted">We conducted periodic branch audits, 
              provided regular assistance through area supervisors, 
              ensured daily IT monitoring and support, offered 
              consistent HR assistance and guidance, and held 
              semi-monthly branch evaluations with franchise owners 
              and managers.</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="mb-4">
          <Card.Body>
            <h5>Marketing Support</h5>
            <p className="text-muted">We launched an opening week marketing drive in collaboration with the LT&G Head Office team, ran social media advertising campaigns, and created flyer layouts and designs.</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="mb-4">
          <Card.Body>
            <h5>Franchise Training</h5>
            <p className="text-muted">We provided 15 days of comprehensive training at our facility.</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

  )
}

export default FranchiseProgramSection