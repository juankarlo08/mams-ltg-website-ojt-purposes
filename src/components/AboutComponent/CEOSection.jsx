import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CEOSection.css'


const CEOSection = () => {
  return (
    <Container fluid className='ceo-section' style={{minHeight:"60vh"}}>     
    <Row lg={2}  className='d-flex align-items-center justify-content-end custom-x-padding' style={{ minHeight: "60vh" }}>
   
      <Col className='d-flex flex-column align-items-start justify-content-center mb-5'>
      
      <h1 className="display-4 fw-bold">The Founder</h1>
      <p className="lead mt-3 text-muted">Based in Legazpi, Albay, entrepreneur Marco Antonio M. Soliman 
        has started a company with his mantra “Better Loans, Better Lives.”  LT&G Credit Line 
        seeks to fill the capital needs of micro enterprises at very affordable rates. Soliman 
        also defied all odds to introduce the country’s first microlending franchise.</p>
      </Col>
     
    </Row>
  </Container>

  )
}

export default CEOSection