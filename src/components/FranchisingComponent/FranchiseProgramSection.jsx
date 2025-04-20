import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PreOpeningPic from '../../img/pre-opening-pic.jpg';
import FranchiseTrainingPic from '../../img/franchise-training-pic.jpg';
import MarketingSupportPic from '../../img/marketing-support-pic.jpg';
import './FranchiseProgramSection.css';

const FranchiseProgramSection = () => {
  return (
    <Container fluid className="custom-x-padding custom-y-padding">
      <Row className='mt-5 justify-content-center'>
           <Col className='mb-5' xxl={10}>
            <h1 className="display-4 fw-bold text-center">Franchise Programs</h1>
            <p className="lead text-muted text-center">Explore our flexible and rewarding franchise programs designed to help you start and grow your own successful microlending business.</p>
             </Col>
          </Row>
    <Row xs={1} md={3} className="justify-content-center ">
        <Col md={3}>
          <Card className="text-white border-0 rounded-1 overflow-hidden shadow card-size">
            <Card.Img src={PreOpeningPic} className="franchising-card-img" alt="Card image" />
            <Card.ImgOverlay
              className="d-flex flex-column justify-content-end image-overlay"
            >
              <Card.Title className="fw-bold">Pre-Opening Support</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={12} >
          <Card className="text-white border-0 rounded-1 overflow-hidden shadow card-size">
            <Card.Img src={PreOpeningPic} className="franchising-card-img" alt="Card image" />
            <Card.ImgOverlay
              className="d-flex flex-column justify-content-end image-overlay"
            >
              <Card.Title className="fw-bold">Opening Support</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          <Card className="text-white border-0 rounded-1 overflow-hidden shadow card-size">
            <Card.Img src={PreOpeningPic} className="franchising-card-img" alt="Card image" />
            <Card.ImgOverlay
              className="d-flex flex-column justify-content-end image-overlay"
            >
              <Card.Title className="fw-bold">Continuing Support</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={3} className="justify-content-center my-5">
        <Col md={3} sm={12}>
          <Card className="text-white border-0 rounded-1 overflow-hidden shadow card-size">
            <Card.Img src={MarketingSupportPic} className="franchising-card-img" alt="Card image" />
            <Card.ImgOverlay
              className="d-flex flex-column justify-content-end image-overlay"
            >
              <Card.Title className="fw-bold">Marketing Support</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          <Card className="text-white border-0 rounded-1 overflow-hidden shadow card-size">
            <Card.Img src={FranchiseTrainingPic} className="franchising-card-img" alt="Card image" />
            <Card.ImgOverlay
              className="d-flex flex-column justify-content-end image-overlay"
            >
              <Card.Title className="fw-bold">Franchise Training</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
       
    </Row>
  </Container>

  )
}

export default FranchiseProgramSection