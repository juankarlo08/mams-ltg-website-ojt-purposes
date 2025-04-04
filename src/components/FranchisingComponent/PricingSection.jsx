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
              Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.
            </Card.Text>
            <ul className="list-unstyled text-start" style={{ maxWidth: "150px" }}>
              <li>✔ 5 products</li>
              <li>✔ Up to 1,000 subscribers</li>
              <li>✔ Basic analytics</li>
              <li>✔ 48-hour support response time</li>
            </ul>
            <Button variant="danger" className="mt-2">Get started today</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4">
        <Card className="shadow-sm p-4 text-start">
          <Card.Body>
          <h6 className="mb-3 text-danger fw-bold">Full Branch</h6>
            <h2 className="fw-bold">Php 448,000</h2>
            <Card.Text className="text-muted">
              Explicabo quo fugit vel facere ullam corrupti non dolores.
            </Card.Text>
            <ul className="list-unstyled text-start" style={{ maxWidth: "150px" }}>
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
 

  )
}

export default PricingSection