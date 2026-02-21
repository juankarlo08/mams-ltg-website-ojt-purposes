import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './PricingSection.css';
import { fadeIn, childVariant } from '../../data/animation';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);

const PricingSection = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "LT&G Credit Line Franchise Packages",
    "description": "Choose from Junior Branch or Full Branch franchise packages to start your microlending business with LT&G Credit Line in the Philippines.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Junior Branch",
        "price": "2450000",
        "priceCurrency": "PHP",
        "url": "https://ltgcreditline.com/franchising",
        "description": "Ideal for entrepreneurs seeking a lower-entry investment with strong growth potential in smaller markets. Franchise Fee: Php 252,000"
      },
      {
        "@type": "Offer",
        "name": "Full Branch",
        "price": "3500000",
        "priceCurrency": "PHP",
        "url": "https://ltgcreditline.com/franchising",
        "description": "Designed for investors ready to operate a full-scale microlending business with broader market reach and higher revenue potential. Franchise Fee: Php 448,000"
      }
    ]
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
        className="py-5 custom-x-padding text-light bg-pricing"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
      >
        <Row className="justify-content-center">
          <div className="text-center my-5">
            <p>Franchise Investment</p>
            <h2 className="display-4">Choose the Right Franchise Package</h2>        
          </div>

          <MotionCol md={4} className="mb-4" variants={childVariant}>
            <Card className="shadow-sm p-4 border-2 border-danger">
              <div className='d-flex justify-content-center'>
                <div className="vps-badge-header fs-5">Junior Branch</div>
              </div>
              <Card.Body>
                <Row>
                  <Col className='text-center'>
                    <small className="text-muted fst-italic">
                      Franchise package starts at
                    </small>
                    <h3 className="fw-bold text-muted">₱2.45M</h3>
                    <hr />
                  </Col>
                </Row>

                <Row className='align-items-center'>   
                  <Col>
                    <p className='fw-bold mb-2'>Franchise Fee</p>
                    <h4 className="fw-bold mb-0">Php 252,000</h4>
                  </Col>
                </Row>
            
                <Card.Text className="text-muted mt-3">
                  Ideal for entrepreneurs seeking a lower-entry investment with strong growth potential in smaller markets.
                </Card.Text>
          
                <ul className="list-unstyled text-start">
                  <li className='mt-2'>✔ Optimized staffing requirements</li>
                  <li className='mt-2'>✔ Reduced space requirements</li>
                  <li className='mt-2'>✔ Focused coverage area</li>
                  <li className='mt-2'>✔ Use of Name, Logo, Trademark</li>
                  <li className='mt-2'>✔ Comprehensive Operations Manual</li>
                  <li className='mt-2'>✔ Hiring Assistance</li>
                  <li className='mt-2'>✔ Research & Development Support</li>
                  <li className='mt-2'>✔ Pre-Opening Support</li>
                  <li className='mt-2'>✔ Marketing Support</li>
                  <li className='mt-2'>✔ Ongoing Business Guidance</li>
                </ul>

                <Button variant="danger" as={Link} to="/contact" className="mt-2">
                  Start Your Franchise
                </Button>
              </Card.Body>
            </Card>
          </MotionCol>

          <MotionCol md={4} className="mb-4" variants={childVariant}>
            <Card className="shadow-sm p-4 border-2 border-danger">
              <div className='d-flex justify-content-center'>
                <div className="vps-badge-header fs-5">Full Branch</div>
              </div>
              <Card.Body>
                <Row>
                  <Col className='text-center'>
                    <small className="text-muted fst-italic">
                      Franchise package starts at
                    </small>
                    <h3 className="fw-bold text-muted">₱3.5M</h3>
                    <hr />
                  </Col>
                </Row>

                <Row className='align-items-center'>   
                  <Col>
                    <p className='fw-bold mb-2'>Franchise Fee</p>
                    <h4 className="fw-bold mb-0">Php 448,000</h4>
                  </Col>
                </Row>
         
                <Card.Text className="text-muted mt-3">
                  Designed for investors ready to operate a full-scale microlending business with broader market reach and higher revenue potential.
                </Card.Text>

                <ul className="list-unstyled text-start">
                  <li className='mt-2'>✔ 7–8 Employee Requirement</li>
                  <li className='mt-2'>✔ Minimum 30 sqm Space</li>
                  <li className='mt-2'>✔ Larger Coverage Area</li>
                  <li className='mt-2'>✔ Use of Name, Logo, Trademark</li>
                  <li className='mt-2'>✔ Comprehensive Operations Manual</li>
                  <li className='mt-2'>✔ Hiring Assistance</li>
                  <li className='mt-2'>✔ Research & Development Support</li>
                  <li className='mt-2'>✔ Pre-Opening Support</li>
                  <li className='mt-2'>✔ Marketing Support</li>
                  <li className='mt-2'>✔ Ongoing Business Guidance</li>
                </ul>

                <Button variant="danger" as={Link} to="/contact" className="mt-2">
                  Start Your Franchise
                </Button>
              </Card.Body>
            </Card>
          </MotionCol>
        </Row>
      </MotionContainer>
    </>
  )
}

export default PricingSection;