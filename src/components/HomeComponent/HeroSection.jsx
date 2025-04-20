import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './HeroSection.css'
import PromotionalVideo from '../../video/promotional-video.mp4';

const HeroSection = () => {
  return (
    <Container fluid className='bg-hero custom-x-padding py-5'>
    <Row className="d-flex align-items-center justify-content-center my-5">
        <Col lg={6} className='mb-5 text-center text-lg-start'>
            <h1 className='text-info display-4 fw-bold'>Franchise the Future of Microlending</h1>  
            <p className='text-muted lead mt-3'>LT&G Credit Line — The first microlending franchise in the Philippines, providing accessible loans to empower your future. Join us in transforming lives and building a brighter financial future together.</p>
            <div className='mt-4'>
            <Button variant='danger' className='me-2'>Learn More</Button>
            <Button variant='outline-dark'>Join Now</Button>
            </div>
        </Col>
        <Col lg={6}>
          <video
            width="100%"
            height="auto"
            controls
            muted
            poster="/images/video-thumbnail.jpg" // Optional thumbnail image
            className='rounder-3 shadow'
          >
            <source src={PromotionalVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
  </Container>
  )
}

export default HeroSection