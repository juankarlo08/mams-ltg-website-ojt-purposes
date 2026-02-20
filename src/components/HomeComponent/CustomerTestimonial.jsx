import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Assets & Animation
import MiriamSinio from '../../img/miriam-sinio.png';
import CrisantaPamintuan from '../../img/crisanta-pamintuan.png';
import MarifeMataba from '../../img/marife-mataba.png';
import { fadeIn, childVariant } from '../../data/animation';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);

const testimonials = [
  {
    id: 1,
    name: "Miriam Sinio",
    pic: MiriamSinio,
    subtitle: "Karinderya Store Owner",
    text: "Nung bumaba ang aking negosyo, LT&G lang ang nakatulong sa akin upang makasurvive ang aking negosyong karinderya. Ang dagdag puhunan ng LT&G ang rason kung bakit patuloy pa din akong nagnenegosyo",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "LT&G Credit Line"
    },
    "reviewRating": testimonials.map((t) => ({
      "@type": "Rating",
      "ratingValue": t.rating,
      "bestRating": 5,
      "name": t.name
    })),
    "author": testimonials.map((t) => ({
      "@type": "Person",
      "name": t.name
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <MotionContainer 
        fluid 
        className="bg-light custom-x-padding py-5" 
        variants={fadeIn} 
        initial="hidden" 
        whileInView="show"
        viewport={{ once: true }}
      >
        <Row className='mt-5'>
          <Col>
            <h2 className="text-center display-4 fw-light">
              Real Stories, Real Success: Our Clients Speak
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center my-5">
          {testimonials.map((testimonial) => (
            <MotionCol 
              variants={childVariant} 
              md={4} 
              key={testimonial.id} 
              className="d-flex mb-4 align-items-stretch"
            >
              <Card className="border-0 shadow-sm p-3 text-center p-4 rounded-4">
                <Row className='justify-content-center'>
                  <img 
                    src={testimonial.pic} 
                    className="rounded-circle border border-3 border-danger p-0" 
                    alt={`${testimonial.name} - LT&G Testimonial`} 
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </Row>
                
                <Row className='mt-3'>
                  <div className="d-flex justify-content-center gap-1">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} className="text-warning" />
                    ))}
                  </div>
                </Row>

                <Card.Body className="d-flex flex-column">
                  <Card.Text className="fw-bold italic">
                    "{testimonial.text}"
                  </Card.Text>
                  
                  <div className="mt-auto">
                    <Card.Text className="mt-2 fw-bold text-danger mb-0">
                      {testimonial.name}
                    </Card.Text>
                    <Card.Text className='text-muted mt-0'> 
                      <small>LT&G Client — {testimonial.subtitle}</small>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </MotionCol>
          ))}
        </Row>
      </MotionContainer>
    </>
  )
}

export default CustomerTestimonial;