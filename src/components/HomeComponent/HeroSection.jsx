import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './HeroSection.css'
import PromotionalVideo from '../../video/promotional-video.mp4';
import VideoThumbnail from '../../img/video-thumbnail/video-thumbnail.png'

const HeroSection = () => {
  return (
    <Container fluid className='hero-section custom-x-padding py-5'>
            <Row className="d-flex align-items-center justify-content-center my-5">
                <Col lg={6} className='d-flex flex-column justify-content-center text-center text-lg-start' >
                    <h1 className='text-info display-3 fw-bold'>Franchise the Future <br /> of Microlending</h1>  
                    <p className='text-muted lead mt-3'>LT&G Credit Line — The first microlending franchise in the Philippines, providing accessible loans to empower your future. Join us in transforming lives and building a brighter financial future together.</p>
                    <div className='mt-4'>
                    <Button variant='danger' className='me-2' href='#/franchising'>Learn More</Button>
                    <Button variant='secondary' href='#/contact'>Join Now</Button>
                    </div>
                    <Row className='mt-4 gap-4'>
                        <Col className='border-start ps-4'>
                        <h1 className="fw-bold  mt-3">100K+</h1>
                        <p className='text-muted'>Satisfied clients</p>
                        </Col>
                        <Col className='border-start ps-4'> 
                        <h1 className="fw-bold mt-3">40+</h1>
                        <p className='text-muted' >Branches nationwide</p>
                        </Col>
                    </Row >
                    <Row className='mt-3'>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 px-3 py-2 ">
                    <span className="text-muted small">4.8 / 5.0</span>


                    <div className="d-flex">
                      {Array(5).fill().map((_, idx) => (
                        <span key={idx} className="text-warning">&#9733;</span>
                      ))}
                    </div>
                    <span className="text-muted small">Trusted by 20+ Franchisees</span>
                  </div>
                    </Row>
                </Col>
                
      
        <Col lg={6} className='d-flex align-items-center'>
          <video
            width="100%"
            height="auto"
            controls
            muted
            poster={VideoThumbnail} 
            className='rounded-5 shadow'
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