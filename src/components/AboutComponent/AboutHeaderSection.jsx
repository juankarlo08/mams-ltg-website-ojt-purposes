import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './AboutHeaderSection.css';
import AboutPic from '../../img/about-header-pic.png'


const AboutHeaderSection = () => {
  return (
    <Container fluid className="bg-about custom-x-padding">
    <Row >
      {/* Left Text Section */}
      <Col lg={6} className="d-flex flex-column justify-content-center my-5 text-center text-lg-start">
      <p className='fw-bold mb-2'>About</p>
        <h1 className="fw-bold display-4">LT&amp;G Credit Line</h1>
        <p className="mt-3 lead text-muted">
          LT&amp;G Credit Line offers loans to micro-entrepreneurs for operational or growth capital, providing customized credit, flexible terms, risk-handling insurance, and value-added services. LT&amp;G is committed to empowering small businesses and families through fair, reliable, and accessible financial solutions. Guided by the principle "better loans, better lives," we promote financial stability, improved livelihoods, and community growth through responsible lending.
        </p>
          <div className='mt-4'>
          <Button variant='danger' className='me-2'>Learn More</Button>
          <Button variant='secondary'>Join Now</Button>
          </div>
      </Col>
      <Col lg={6} className='d-flex justify-content-lg-end justify-content-center'>
       <img src={AboutPic} className='img-fluid' style={{maxHeight:"800px", width:"auto"}} alt='stats pic' />
      </Col>
    </Row>
  </Container>
  )
}

export default AboutHeaderSection