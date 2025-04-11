import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StatsPic from '../../img/stats-pic.png';
import Image from 'react-bootstrap/Image';


const StatsSection = () => {
  return (
    <Container fluid className='custom-x-padding py-5'>
    <Row className='d-flex flex-column-reverse flex-lg-row align-items-center my-5'>
        <Col lg={6} className='d-flex justify-content-center'>
        <Image  src={StatsPic} className='rounded-5 img-fluid' style={{maxHeight:"600px"}} alt='stats pic' />
        </Col>
        
        <Col lg={6} className='mt-md-5 mt-sm-5 ps-md-5 '>
        <h6 className='fw-bold'>Success</h6>
        <h1 className="display-4 fw-bold mt-3">Transforming Lives Through Microfinance Solutions</h1>
        <p className='lead mt-3 text-muted'>LT&G Credit Line has empowered thousands of entrepreneurs across the Philippines. Our innovative microlending approach has made financial access a reality for many. </p>
        <Row>
            <Col md={6} sm={12} className='border-start ps-4'>
            <h1 className="fw-bold display-5 mt-3">100K+</h1>
            <p className='text-muted'>Satisfied clients</p>
            </Col>
            <Col md={6} sm={12} className='border-start ps-4'> 
            <h1 className="fw-bold display-5 mt-3">60+</h1>
            <p className='text-muted' >Branches nationwide</p>
            </Col>
        </Row>
        <div className='my-4'>
            <Button variant='danger' className='me-3'>Learn More</Button>
            <a href="#" className="text-dark text-decoration-none">Sign up →</a>
        </div>
        </Col>
    </Row>
    </Container>
  )
}

export default StatsSection