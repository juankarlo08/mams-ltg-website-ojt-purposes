import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './PricingSection.css'

const PricingSection = () => {
  return (
    <div className="pricing-header">
    <Container className="py-5 custom-x-padding text-light">
    {/* Header */}
    <div className="text-center mb-4">
      <p className="text-danger fw-semibold">Pricing</p>
      <h1 className="display-4 fw-bold">Choose the right plan for you</h1>
      <p className="lead">
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
    </div>

    {/* Pricing Cards */}
    <Row className="justify-content-center">
      {/* Hobby Plan */}
      <Col md={5} className="mb-4">
        <Card className="shadow-sm p-4 text-start">
          <Card.Body>
            <h5 className="text-primary">Hobby</h5>
            <h3 className="fw-bold">$29 <span className="fs-6">/month</span></h3>
            <Card.Text className="text-muted">
              Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.
            </Card.Text>
            <ul className="list-unstyled text-start" style={{ maxWidth: "200px" }}>
              <li>✔ 5 products</li>
              <li>✔ Up to 1,000 subscribers</li>
              <li>✔ Basic analytics</li>
              <li>✔ 48-hour support response time</li>
            </ul>
            <Button variant="danger" className="mt-2">Get started today</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Team Plan */}
      <Col md={5} className="mb-4">
        <Card className="shadow-sm p-4 text-start">
          <Card.Body>
            <h5 className="text-primary">Team</h5>
            <h3 className="fw-bold">$99 <span className="fs-6">/month</span></h3>
            <Card.Text className="text-muted">
              Explicabo quo fugit vel facere ullam corrupti non dolores.
            </Card.Text>
            <ul className="list-unstyled text-start" style={{ maxWidth: "250px" }}>
              <li>✔ Unlimited products</li>
              <li>✔ Unlimited subscribers</li>
              <li>✔ Advanced analytics</li>
              <li>✔ 1-hour dedicated support response time</li>
              <li>✔ Marketing automations</li>
            </ul>
            <Button variant="danger" className="mt-2">Get started today</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </Container>
  </div>
  )
}

export default PricingSection