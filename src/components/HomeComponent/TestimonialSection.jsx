import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import FranchiseeLogo from '../../img/samplelogo.png';
import Franchisee from '../../img/paolo.png';
import Button from 'react-bootstrap/Button';
import './TestimonialSection.css';
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <Container fluid className="bg-info custom-x-padding py-5">
      <Carousel controls={true} indicators={false} interval={null}>
        <Carousel.Item>
          <Row className="align-items-center justify-content-center my-5">
            {/* Left Side - Video/Thumbnail */}
            <Col md={4}>
              <div
                style={{
                  width: "100%",
                  height: "350px",
                  backgroundColor: "#666",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#444",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "40px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    ▶
                  </span>
                </div>
              </div>
            </Col>

            {/* Right Side - Testimonial Content */}
            <Col md={4}>
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

              <Row className="align-items-center mt-4 text-light"> 
                <Col xs="auto">
                  <p className="mb-0 fw-semibold">Juan Carlos Co</p>
                  <small className="text-secondary">Franchisee, LT&G San Fernando Branch</small>
                </Col>
                <Col xs="auto">
                  <img
                    src={FranchiseeLogo}
                    alt="Webflow"
                    style={{ height: "20px", marginLeft: "20px" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="align-items-center justify-content-center my-5">
            {/* Left Side - Video/Thumbnail */}
            <Col md={4}>
              <div
                style={{
                  width: "100%",
                  height: "350px",
                  backgroundColor: "#666",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#444",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "40px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    ▶
                  </span>
                </div>
              </div>
            </Col>

            {/* Right Side - Testimonial Content */}
            <Col md={4}>
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
                <Col xs="auto">
                  <img
                    src={FranchiseeLogo}
                    alt="Webflow"
                    style={{ height: "20px", marginLeft: "20px" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="align-items-center justify-content-center my-5">
            {/* Left Side - Video/Thumbnail */}
            <Col md={4}>
              <div
                style={{
                  width: "100%",
                  height: "350px",
                  backgroundColor: "#666",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#444",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "40px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    ▶
                  </span>
                </div>
              </div>
            </Col>

            {/* Right Side - Testimonial Content */}
            <Col md={4}>
              <div className="mb-2 ">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-warning me-1" />
                ))}
              </div>

              <div
              >
                <p className="fw-bold mb-0 text-light lead mt-4">
                  "Ang kagandahan sa ginagawa ng LT&G is nakakatulong ka talaga sa mga nangangailangan. 
                  One business represent one family or more, the point that you are helping a family, you're helping their people
                  reach their goal. Nakakatuwa dahil you are part of their success"
                </p>
              </div>

              <Row className="align-items-center mt-4 text-light"> 
                <Col xs="auto">
                  <p className="mb-0 fw-semibold">Jasper Robles</p>
                  <small className="text-secondary">Franchisee, LT&G Lipa Branch</small>
                </Col>
                <Col xs="auto">
                  <img
                    src={FranchiseeLogo}
                    alt="Webflow"
                    style={{ height: "20px", marginLeft: "20px" }}
                  />
                </Col>
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