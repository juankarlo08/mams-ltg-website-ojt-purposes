import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CEOPic from '../../img/ceo-pic.png'


const CEOSection = () => {
  return (
    <Container fluid className='custom-x-padding py-5'>
        
    <Row className='my-5 d-flex align-items-center'>
    <Col md={6} sm={12} className='mt-5 d-flex justify-content-center align-items-center'>
        <img src={CEOPic} className='img-fluid' style={{maxHeight:"700px", width:"auto"}}alt='stats pic' />
        </Col>
      <Col>
      <h1 className="display-4 fw-bold">Marco Antonio M. Soliman</h1>
      <h5>President / CEO</h5>
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