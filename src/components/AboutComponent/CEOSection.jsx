import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CEOSection.css'
import CEOPic from '../../img/ceo-pic.png'


const CEOSection = () => {
  return (
    <Container fluid className='ceo-section' >     
    <Row className='custom-x-padding' >

     <Col lg={6} className='d-flex justify-content-center align-items-center'>
         <div>
              <img src={CEOPic} alt="First Pic" className="img-fluid pt-4 shadow" style={{width:"auto", maxHeight:"700px"}}/>
            </div> 
      </Col>

      <Col lg={6} className='d-flex flex-column align-items-start justify-content-center mb-5'>   
      <div className='text-center text-lg-start'>
      <h1 className="display-4 fw-bold mt-5">Marco Antonio M. Soliman</h1>
      <h5 className='text-muted'>President & CEO</h5>
      <p className="lead mt-3 text-muted">Based in Legazpi, Albay, entrepreneur Marco Antonio M. Soliman 
        has started a company with his mantra “Better Loans, Better Lives.”  LT&G Credit Line 
        seeks to fill the capital needs of micro enterprises at very affordable rates. Soliman 
        also defied all odds to introduce the country’s first microlending franchise.</p>
        </div>
      </Col>

    </Row>
  </Container>

  )
}

export default CEOSection