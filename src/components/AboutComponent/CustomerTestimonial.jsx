import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
      id: 1,
      name: "Name Surname",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      rating: 5,
    },
    {
      id: 2,
      name: "Name Surname",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      rating: 5,
    },
    {
      id: 3,
      name: "Name Surname",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      rating: 5,
    },
  ];

const CustomerTestimonial = () => {
  return (
      <Container fluid className="custom-x-padding py-5 bg-light">
        <Row>
            <Col>
            <h2 className="text-center fw-bold">Customer testimonials</h2>
      <p className="text-center text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
            </Col>
        </Row>

      <Row className="justify-content-center">
        {testimonials.map((testimonial) => (
          <Col md={4} key={testimonial.id} className="mb-4">
            <Card className="border-0 shadow p-3 text-center">
              <div>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-warning" />
                ))}
              </div>
              <Card.Body>
                <Card.Text className="fw-bold">
                  "{testimonial.text}"
                </Card.Text>
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="rounded-circle bg-light d-flex justify-content-center align-items-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <FaStar className="text-muted" />
                  </div>
                  <Card.Text className="mt-2">{testimonial.name}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CustomerTestimonial