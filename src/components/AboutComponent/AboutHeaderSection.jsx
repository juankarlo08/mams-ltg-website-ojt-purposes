import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutHeaderSection.css';


const AboutHeaderSection = () => {
  return (
    <Container fluid className='bg-about custom-x-padding py-5 text-light text-center'>
        <Row className='d-flex align-items-center my-5 justify-content-center'>
        <Col lg={6} className='my-5'>
             <h6 className='fw-bold'>About</h6>
            <h1 className="fw-bold display-4">LT&G Credit Line </h1>
            <p className='mt-5 lead'>
            LT&G Credit Line offers loans to micro-entrepreneurs for operational or growth capital, 
            providing customized credit, flexible terms, risk-handling insurance, and value-added services.
            </p>
            <p className='lead'>
            LT&G is committed to empowering small businesses and families through fair, reliable, and accessible 
            financial solutions. Guided by the principle "better loans, better lives," we promote financial 
            stability, improved livelihoods, and community growth through responsible lending.
            </p>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutHeaderSection