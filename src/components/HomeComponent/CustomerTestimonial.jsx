import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import MiriamSinio from '../../img/miriam-sinio.png';
import CrisantaPamintuan from '../../img/crisanta-pamintuan.png';
import MarifeMataba from '../../img/marife-mataba.png';

const testimonials = [
    {
      id: 1,
      name: "Miriam Sinio",
      pic: MiriamSinio,
      subtitle: "Karinderya Store Owner",
      text: "Nung bumaba ang aking negosyo, LT&G lang ang nakatulong sa akin upang makasurvive ang aking negosyong karinderya. Ang dagdag puhunan ng ng LT&G ang rason kung bakit patuloy pa din akong nagnenegosyo",
      rating: 5,
    },
    {
      id: 2,
      name: "Crisanta Pamintuan",
      pic: CrisantaPamintuan,
      subtitle: "Salon Store Owner",
      text: "Wala po akong masasabi sa LT&G Credit Line kasi since nanghiram po ako dito nakatulong po ito ng malaki sa akin sa pamamagitan ng pagdadagdag ko ng puhunan sa aking salon",
      rating: 5,
    },
    {
      id: 3,
      name: "Marife Mataba",
      pic: MarifeMataba,
      subtitle: "Sari-Sari Store Owner",
      text: "Nang dahil sa LT&G lumawak ang aking business, dati kasi simpleng sari-sari store lang ngayon ay nadagdagan ang pinagkakakitaan dahil sa dagdag puhunan ng LT&G",
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
            <Card className="border shadow-sm p-3 text-center p-5">
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
                  <div>
                   <img src={testimonial.pic} className="rounded-circle d-flex justify-content-center align-items-center" alt="First Pic" style={{ width: "60px", height: "60px" }}/>
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