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
            <h6 className="mb-3 text-danger fw-bold">Junior Branch</h6>
            <h2 className="fw-bold">Php 252,000</h2>
            <Card.Text className="text-muted">
            An ideal entry-level option for entrepreneurs looking to start with a manageable investment and grow within a smaller market.
            </Card.Text>
            <ul className="list-unstyled text-start" >
              <li className='mt-2'>✔ Less Employee Needed </li>
              <li className='mt-2'>✔ Less Required Space</li>
              <li className='mt-2'>✔ Smaller Coverage Area</li>
              <li className='mt-2'>✔ Use of Name, Logo, Trademark</li>
              <li className='mt-2'>✔ Pre-Opening & Start-up Assistance</li>
              <li className='mt-2'>✔ Site Evaluation Assistance</li>
              <li className='mt-2'>✔ Franchise Operations Manual on System</li>
              <li className='mt-2'>✔ Training on Business Operations, Management, Customer Service, and Local Store Marketing</li>
              <li className='mt-2'>✔ Grand Opening & Marketing Support</li>
              <li className='mt-2'>✔ Continuing Business Guidance</li>
            </ul>
            <Button variant="danger" href='#/contact' className="mt-2">Get started today</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4">
        <Card className="shadow-sm p-4 text-start">
          <Card.Body>
          <h6 className="mb-3 text-danger fw-bold">Full Branch</h6>
            <h2 className="fw-bold">Php 448,000</h2>
            <Card.Text className="text-muted">
            A complete franchise package designed for those ready to establish a full-scale operation with broader market reach and higher income potential
            </Card.Text>
            <ul className="list-unstyled text-start">
              <li className='mt-2'>✔ 7-8 Employee Needed </li>
              <li className='mt-2'>✔ At least 30 sqm Required Space</li>
              <li className='mt-2'>✔ Larger Coverage Area</li>
              <li className='mt-2'>✔ Use of Name, Logo, Trademark</li>
              <li className='mt-2'>✔ Pre-Opening & Start-up Assistance</li>
              <li className='mt-2'>✔ Site Evaluation Assistance</li>
              <li className='mt-2'>✔ Franchise Operations Manual on System</li>
              <li className='mt-2'>✔ Training on Business Operations, Management, Customer Service, and Local Store Marketing</li>
              <li className='mt-2'>✔ Grand Opening & Marketing Support</li>
              <li className='mt-2'>✔ Continuing Business Guidance</li>
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