import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './PricingSection.css'

const PricingSection = () => {
  return (
    <Container fluid className="py-5 custom-x-padding text-light bg-pricing">
    <Row className="justify-content-center">
    <div className="text-center my-5">
          <p className="fw-semibold">Pricing</p>
          <h1 className="display-4 fw-bold">Choose the right plan for you</h1>
          <p className="lead text-secondary">
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

      <Col md={4} className="mb-4">
        <Card className="shadow-sm p-4 text-start">
          <Card.Body>
          <Row className='align-items-center'>   
            <Col >
            <h6 className="mb-3 text-danger fw-bold">Junior Branch</h6>
            <h2 className="fw-bold mb-0">Php 252,000</h2>
            <small className='text-muted '>Franchise Fee</small>
            </Col>
            <Col className='border-start'>
            <h3 className="fw-bold text-info "> Starts at 2.45M</h3>
            </Col>
            </Row>
            
            <Card.Text className="text-muted mt-3">
            An ideal entry-level option for entrepreneurs looking to start with a manageable investment and grow within a smaller market.
            </Card.Text>
            <ul className="list-unstyled text-start" >
              <li className='mt-2'>✔ Less Employee Needed </li>
              <li className='mt-2'>✔ Less Required Space</li>
              <li className='mt-2'>✔ Smaller Coverage Area</li>
              <li className='mt-2'>✔ Use of Name, Logo, Trademark</li>
              <li className='mt-2'>✔ Comprehensive Operations Manual</li>
              <li className='mt-2'>✔ Hiring Assistance </li>
              <li className='mt-2'>✔ Research and Development Activities</li>
              <li className='mt-2'>✔ Pre-Opening Support</li>
              <li className='mt-2'>✔ Marketing Support</li>
              <li className='mt-2'>✔ Business Guidance and Support</li>
            </ul>

            <Button variant="danger" href='#/contact' className="mt-2">Get started today</Button>
         
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4">
        <Card className="shadow-sm p-4 text-start">
          <Card.Body>
          <h6 className="mb-3 text-danger fw-bold">Full Branch</h6>
            <h2 className="fw-bold mb-0">Php 448,000</h2>
            <small className='text-muted'>Franchise Fee</small>
            <Card.Text className="text-muted mt-3">
            A complete franchise package designed for those ready to establish a full-scale operation with broader market reach and higher income potential
            </Card.Text>
            <ul className="list-unstyled text-start">
              <li className='mt-2'>✔ 7-8 Employee Needed </li>
              <li className='mt-2'>✔ At least 30 sqm Required Space</li>
              <li className='mt-2'>✔ Larger Coverage Area</li>
              <li className='mt-2'>✔ Use of Name, Logo, Trademark</li>
              <li className='mt-2'>✔ Comprehensive Operations Manual</li>
              <li className='mt-2'>✔ Hiring Assistance </li>
              <li className='mt-2'>✔ Research and Development Activities</li>
              <li className='mt-2'>✔ Pre-Opening Support</li>
              <li className='mt-2'>✔ Marketing Support</li>
              <li className='mt-2'>✔ Business Guidance and Support</li>
            </ul>
            <Button variant="danger" href='#/contact' className="mt-2">Get started today</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
 

  )
}

export default PricingSection