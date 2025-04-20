import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
      id: 1,
      name: "Miriam Sinio",
      subtitle: "Sari-Sari Store Owner",
      text: "Maganda ang patakaran ng LT&G at ang payment ay di gaanong kalaki. Mapapagipunan ang arawan at mababait ang mga collector",
      rating: 5,
    },
    {
      id: 2,
      name: "Crisanta Pamintuan",
      subtitle: "Salon Store Owner",
      text: "Wala po akong masasabi sa LT&G Credit Line kasi since nanghiram po ako dito nakatulong po ito ng malaki sa akin sa pamamagitan ng pagdadagdag ko ng puhunan sa aking salon",
      rating: 5,
    },
    {
      id: 3,
      name: "Name Surname",
      subtitle: "Sari-Sari Store Owner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      rating: 5,
    },
  ];

const CustomerTestimonial = () => {
  return (
      <Container fluid className="custom-x-padding py-5">
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
            <Card className="border-0 shadow p-3 text-center p-5">
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
                  
                    <Row>
                      <Col>
                      <Card.Text className="mt-2 fw-semibold">{testimonial.name}</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <Card.Text className='text-muted mt-0'> <small>LT&G Client - {testimonial.subtitle}</small></Card.Text>
                      </Col>

                    </Row>
                    
                    
                  
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