import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
// import FranchiseeLogo from '../../img/samplelogo.png';
// import Franchisee from '../../img/paolo.png';
// import Button from 'react-bootstrap/Button';
import SirCarloVidThumbnail from '../../img/video-thumbnail/sir-carlo-thumbnail.jpg'
import MamEuniceVidThumbnail from '../../img/video-thumbnail/mam-eunice-thumbnail.jpg'
import SirJasperVidThumbnail from '../../img/video-thumbnail/sir-jasper-thumbnail.jpg'
import SirCarloTestimonial from '../../video/SirCarloTestimonial.mp4'
import SirJasperTestimonial from '../../video/SirJasperTestimonial.mp4'
import MamEuniceTestimonial from '../../video/MamEuniceTestimonial.mp4'
import './TestimonialSection.css';
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <Container fluid className="bg-info custom-x-padding py-5">
      <Row className='mt-5'>
            <Col>
              <h1 className="text-center display-4 fw-bold text-light">Hear From Our Successful Franchisees</h1>
        <p className="text-center lead text-secondary">
        Discover how partnering with us has transformed the lives and businesses of our franchise owners.
        </p>
              </Col>
        </Row>
      <Carousel controls={true} indicators={false} interval={null}>
        <Carousel.Item>
        
          <Row className="align-items-center justify-content-center my-5">
            {/* Left Side - Video/Thumbnail */}
            <Col lg={4} className='d-flex align-items-center justify-content-center'>
          <video
            width="auto"
            height="380px"
            controls
            poster={SirCarloVidThumbnail} 
            className='rounded-5 shadow'
          >
            <source src={SirCarloTestimonial} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
            {/* Right Side - Testimonial Content */}
            <Col lg={4} className='text-center text-lg-start mt-3 d-flex flex-column align-items-center align-items-lg-start justify-content-center'>
              <div className="mb-2 ">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-warning me-1" />
                ))}
              </div>

              <div
              >
                <p className="fw-bold mb-0 text-light lead mt-4">
                  "Para sa mga future franchisees, if naghahanap kayo ng good business model na maganda 
                  yung potential as long as you are committed na seseryosohin niyo, I definitely recommend LT&G"
                </p>
              </div>

              <Row className="align-items-center mt-4 text-light "> 
                <Col xs="auto">
                  <p className="mb-0 fw-semibold">Juan Carlos Co</p>
                  <small className="text-secondary">Franchisee, LT&G San Fernando Branch</small>
                </Col>
                {/* <Col xs="auto">
                  <img
                    src={FranchiseeLogo}
                    alt="Webflow"
                    style={{ height: "20px", marginLeft: "20px" }}
                  />
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="align-items-center justify-content-center my-5">
            {/* Left Side - Video/Thumbnail */}
            <Col lg={4} className='d-flex align-items-center justify-content-center'>
          <video
            width="auto"
            height="380px"
            controls
            poster={MamEuniceVidThumbnail} 
            className='rounded-5 shadow'
          >
            <source src={MamEuniceTestimonial} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>

            {/* Right Side - Testimonial Content */}
            <Col md={4} className='text-center text-lg-start mt-3 d-flex flex-column align-items-center align-items-lg-start justify-content-center'>
              <div className="mb-2 ">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-warning me-1" />
                ))}
              </div>

              <div
              >
                <p className="fw-bold mb-0 text-light lead mt-4">
                  "Operations wise, there were a lot of challenges 
                  but the support of LT&G is ramdam naman namin, 
                  what was promise during the presentations and during our 
                  one on one with the owner and management binibigay naman nila, 
                  kung baga I'm happy with the franchise "
                </p>
              </div>

              <Row className="align-items-center mt-4 text-light"> 
                <Col xs="auto">
                  <p className="mb-0 fw-semibold">Eunice Bermejo</p>
                  <small className="text-secondary">Franchisee, LT&G Las Piñas Branch</small>
                </Col>
                {/* <Col xs="auto">
                  <img
                    src={FranchiseeLogo}
                    alt="Webflow"
                    style={{ height: "20px", marginLeft: "20px" }}
                  />
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="align-items-center justify-content-center my-5">
            {/* Left Side - Video/Thumbnail */}
            <Col lg={4} className='d-flex align-items-center justify-content-center'>
          <video
            width="auto"
            height="380px"
            controls
            poster={SirJasperVidThumbnail} 
            className='rounded-5 shadow'
          >
            <source src={SirJasperTestimonial} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>

            {/* Right Side - Testimonial Content */}
            <Col md={4} className='text-center text-lg-start mt-3 d-flex flex-column align-items-center align-items-lg-start justify-content-center'>
              <div className="mb-2 ">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-warning me-1" />
                ))}
              </div>

              <div
              >
                <p className="fw-bold mb-0 text-light lead mt-4">
                  "Ang kagandahan sa ginagawa ng LT&G is nakakatulong ka talaga sa mga nangangailangan. 
                  One business represent one family or more, the point that you are helping a family, you're helping other people
                  reach their goal. Nakakatuwa dahil you are part of their success"
                </p>
              </div>

              <Row className="align-items-center mt-4 text-light"> 
                <Col xs="auto">
                  <p className="mb-0 fw-semibold">Jasper Robles</p>
                  <small className="text-secondary">Franchisee, LT&G Lipa Branch</small>
                </Col>
                {/* <Col xs="auto">
                  <img
                    src={FranchiseeLogo}
                    alt="Webflow"
                    style={{ height: "20px", marginLeft: "20px" }}
                  />
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Duplicate <Carousel.Item> for more testimonials */}
      </Carousel>
    </Container>
  )
}

export default TestimonialSection