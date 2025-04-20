import React from 'react'
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
      id: 1,
      videoUrl: "https://via.placeholder.com/500x400", // Replace with actual video thumbnail or embed
      name: "Name Surname",
      position: "Position, Company Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      rating: 5,
      companyLogo: "https://via.placeholder.com/100x40", // Replace with actual logo
    },
    {
      id: 2,
      videoUrl: "https://via.placeholder.com/500x400",
      name: "Name Surname",
      position: "Position, Company Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      rating: 5,
      companyLogo: "https://via.placeholder.com/100x40",
    },
  ];

const FranchiseTestimonial = () => {
  return (
    <Container className="my-5">
    <Carousel indicators={true} controls={true}>
      {testimonials.map((testimonial) => (
        <Carousel.Item key={testimonial.id}>
          <Row className="align-items-center">
            {/* Video Section */}
            <Col md={6}>
              <div className="video-placeholder position-relative">
                <img
                  src={testimonial.videoUrl}
                  alt="Video thumbnail"
                  className="img-fluid rounded"
                />
                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "50%",
                    padding: "15px",
                  }}
                >
                  <FaStar className="text-white" size={30} />
                </div>
              </div>
            </Col>

            {/* Testimonial Content */}
            <Col md={6}>
              <Card className="border-0 bg-transparent">
                <Card.Body>
                  {/* Stars */}
                  <div>
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} className="text-warning" />
                    ))}
                  </div>
                  {/* Text */}
                  <Card.Text className="fw-bold mt-3">
                    "{testimonial.text}"
                  </Card.Text>
                  {/* User Info */}
                  <Card.Text className="mb-1">{testimonial.name}</Card.Text>
                  <Card.Text className="text-muted">
                    {testimonial.position}
                  </Card.Text>
                  {/* Company Logo */}
                  <img
                    src={testimonial.companyLogo}
                    alt="Company Logo"
                    className="mt-2"
                    style={{ width: "100px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  </Container>
  )
}

export default FranchiseTestimonial