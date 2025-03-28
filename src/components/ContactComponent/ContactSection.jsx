import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ContactSection = () => {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        {/* Get in Touch Section */}
        <Row className="mb-5">
          <Col md={4}>
            <h2 className="fw-bold">Get in touch</h2>
            <p>Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.</p>
          </Col>
          <Col md={8}>
            <Row>
              {[
                { title: "Collaborate", email: "collaborate@example.com", phone: "+1 (555) 905-2345" },
                { title: "Press", email: "press@example.com", phone: "+1 (555) 905-3456" },
                { title: "Join our team", email: "careers@example.com", phone: "+1 (555) 905-4567" },
                { title: "Say hello", email: "hello@example.com", phone: "+1 (555) 905-5678" },
              ].map((contact, index) => (
                <Col md={6} key={index} className="mb-3">
                  <Card className="bg-secondary text-white p-3 border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="fw-bold">{contact.title}</h5>
                      <a href={`mailto:${contact.email}`} className="text-white d-block">{contact.email}</a>
                      <p className="mb-0">{contact.phone}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Locations Section */}
        <Row>
          <Col md={4}>
            <h2 className="fw-bold">Locations</h2>
            <p>Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.</p>
          </Col>
          <Col md={8}>
            <Row>
              {[
                { city: "Los Angeles", address: "4556 Brendan Ferry", region: "Los Angeles, CA 90210" },
                { city: "New York", address: "886 Walter Street", region: "New York, NY 12345" },
                { city: "Toronto", address: "7363 Cynthia Pass", region: "Toronto, ON N3Y 4H8" },
                { city: "Chicago", address: "726 Mavis Island", region: "Chicago, IL 60601" },
              ].map((location, index) => (
                <Col md={6} key={index} className="mb-3">
                  <Card className="bg-secondary text-white p-3 border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="fw-bold">{location.city}</h5>
                      <p className="mb-1">{location.address}</p>
                      <p className="mb-0">{location.region}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
