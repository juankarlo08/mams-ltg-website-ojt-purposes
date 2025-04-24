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

    <Row className="d-flex">
  <Col lg={3} className="d-flex flex-column">
    <Card className="flex-fill mb-4 p-3 border-2 shadow-sm rounded-5">
      <Card.Body>
        <h5 className='mb-4'>Pre-Opening Support</h5>
        <ul className="list-unstyled text-start text-muted">
          <li className='mt-2'>• Franchise Area Mapping & Survey</li>
          <li className='mt-2'>• Staff Recruitment Activities</li>
          <li className='mt-2'>• Staff Training</li>
          <li className='mt-2'>• Branch Office Site Evaluation</li>
          <li className='mt-2'>• Certificate Course in Microlending</li>
          <li className='mt-2'>• Assistance On Business Registration & Licensing</li>
          <li className='mt-2'>• Office Refurbishment</li>
        </ul>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={3} className="d-flex flex-column">
    <Card className="flex-fill mb-4 p-3 border-2 shadow-sm rounded-5">
      <Card.Body>
        <h5 className='mb-4'>Opening Support</h5>
        <ul className="list-unstyled text-start text-muted">
          <li className='mt-2'>• Detailed Area Mapping</li>
          <li className='mt-2'>• Guided Business Roll Out</li>
          <li className='mt-2'>• Systems Installation and Orientation</li>
          <li className='mt-2'>• Branch Blessing on Opening Day</li>
        </ul>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={3} className="d-flex flex-column">
    <Card className="flex-fill mb-4 p-3 border-2 shadow-sm rounded-5">
      <Card.Body>
        <h5 className='mb-4'>Continuing Support</h5>
        <ul className="list-unstyled text-start text-muted">
          <li className='mt-2'>• Periodic Branch Audit</li>
          <li className='mt-2'>• Regular Branch Assistance by Area Supervisors</li>
          <li className='mt-2'>• Daily IT monitoring And Support</li>
          <li className='mt-2'>• Regular HR Assistance and Guidance</li>
          <li className='mt-2'>• Semi-Monthly Branch Evaluation with Franchise Owners & Managers</li>
        </ul>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={3} className="d-flex flex-column">
    <Card className="flex-fill mb-4 p-3 border-2 shadow-sm rounded-5">
      <Card.Body>
        <h5 className='mb-4'>Marketing Support</h5>
        <ul className="list-unstyled text-start text-muted">
          <li className='mt-2'>• Opening Week Marketing Drive with LT&G Head Office Team</li>
          <li className='mt-2'>• Social Media Advertising</li>
          <li className='mt-2'>• Flyer Layout and Design</li>
        </ul>
      </Card.Body>
    </Card>
  </Col>
</Row>

  </Container>

  )
}

export default FranchiseProgramSection