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
        <Row className='mt-5'>
            <Col>
            <h1 className="text-center display-4 fw-bold">Real Stories, Real Success: Our Clients Speak</h1>
      <p className="text-center lead text-muted">
      Discover how our microloans have empowered individuals and businesses to achieve their financial goals.
      </p>
            </Col>
        </Row>

      <Row className="justify-content-center my-5">
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