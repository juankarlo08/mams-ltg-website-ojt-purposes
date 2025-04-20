import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CEOPic from '../../img/ceo-pic.png'


const CEOSection = () => {
  return (
    <Container fluid className='custom-x-padding pt-5'>
        
    <Row className='mt-5 d-flex align-items-center rounded-5 shadow-sm border p-5'>
    <Col md={6} sm={12} className='d-flex justify-content-center align-items-center '>
        <img src={CEOPic} className='img-fluid mb-5' style={{maxHeight:"500px", width:"auto"}}alt='stats pic' />
        </Col>
      <Col>
      
      <h1 className="display-4 fw-bold">The Founder</h1>
      <p className="lead mt-4">Based in Legazpi, Albay, entrepreneur Marco Antonio M. Soliman 
        has started a company with his mantra “Better Loans, Better Lives.”  LT&G Credit Line 
        seeks to fill the capital needs of micro enterprises at very affordable rates. Soliman 
        also defied all odds to introduce the country’s first microlending franchise.</p>
      </Col>
     
    </Row>
  </Container>
  )
}

export default CEOSection