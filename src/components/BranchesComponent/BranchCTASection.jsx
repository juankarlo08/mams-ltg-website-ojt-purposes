import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const BranchCTASection = () => {
  return (
    <Container fluid className='custom-x-padding py-5 bg-dark text-white'>
        <Row className='d-flex align-items-center my-5'>
            <Col lg={6} md={12} className='mb-4'>
                <h1 className="diplay-4 fw-bold">Join the Fast-Growing <br /> Microlending Industry!</h1>
            </Col>
            <Col lg={6} md={12} className='d-flex justify-content-lg-end justify-content-start'>
                <Button variant='danger' className='me-2'> Get Started </Button>
                <Button variant='dark'> Learn More → </Button>
            </Col>
        </Row>
    </Container>
  )
}

export default BranchCTASection