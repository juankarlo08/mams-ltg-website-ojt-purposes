import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './TimelineSection.css'
import FirstPic from '../../img/first-pic.jpg'


const TimelineSection = () => {
  return (
    
  <Container fluid className="py-5 custom-x-padding">

  <Row className='justify-content-center my-5'>
    <Col xxl={7} className='text-center'>
        <p className='text-center mb-2 fw-bold'>Better Loans, Better Lives</p>
        <h1 className="display-4 fw-bold text-center">Milestones of Growth</h1>
        <p className="lead text-muted text-center">Every step marks our dedication to providing reliable credit solutions. 
        Together, we've built a legacy of progress and partnership.</p>
    </Col>    
  </Row>


  <Row id="2014" className="mt-5 mt-md-3 justify-content-center">
  {/* Left: Image Placeholder */}
  <Col
    md={{ span: 5, order: 1 }}
    xs={{ span: 11, order: 3 }}
    className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-end mt-md-0"
  >
    <div className="text-center">
      <img src={FirstPic} alt="First Pic" className="pic-holder img-fluid" />
    </div>
  </Col>
  {/* Center: Timeline Line and Dot */}
  <Col
    md={{ span: 1, order: 2 }}
    xs={{ span: 1, order: 1 }}
    className="position-relative d-flex justify-content-center vertical-height align-items-stretch "
  >
    <div className="timeline-vertical"></div>
    <div className='d-flex align-items-start justify-content-center pt-4'>
    <div className="timeline-dot "></div>
    </div>
    
  </Col>
  {/* Right: Content */}
  <Col
    md={{ span: 5, order: 3 }}
    xs={{ span: 11, order: 2 }}
    className="position-relative pe-4 py-4 d-flex flex-column justify-content-end justify-content-lg-start"
  >
    <div>
    <h4 className="fw-bold text-danger m-0">2014</h4>
    <h5 className="fw-semibold mt-3">Marking the Beginning</h5>
    <p className="text-muted lead">
      LT&G Credit Line launched its microlending operations by opening its
      first branch in Legazpi City, Albay, signaling its commitment to offering
      accessible financial solutions.
    </p>
    </div>
  </Col>
  {/* Extra Timeline Line for small screens */}
  <Col
    xs={{ span: 1, order: 2 }}
    className="d-md-none position-relative d-flex justify-content-center vertical-height"
  >
    <div className="timeline-vertical"></div>
  </Col>
</Row>


<Row id="2014" className="justify-content-center">
  {/* Left: Image Placeholder */}
  <Col
    md={{ span: 5, order: 3 }}
    xs={{ span: 11, order: 3 }}
    className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-start mt-md-0"
  >
    <div className="text-center">
      <img src={FirstPic} alt="First Pic" className="pic-holder img-fluid" />
    </div>
  </Col>
  {/* Center: Timeline Line and Dot */}
  <Col
    md={{ span: 1, order: 2 }}
    xs={{ span: 1, order: 1 }}
    className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-3"
  >
    <div className="timeline-vertical"></div>
    <div className='d-flex align-items-start justify-content-center pt-4'>
    <div className="timeline-dot "></div>
    </div>
    
  </Col>
  {/* Right: Content */}
  <Col
    md={{ span: 5, order: 1 }}
    xs={{ span: 11, order: 2 }}
    className="position-relative pe-4 py-4 d-flex flex-column text-start text-lg-end justify-content-end justify-content-lg-center"
  >
    <div>
    <h4 className="fw-bold text-danger m-0">2014</h4>
    <h5 className="fw-semibold mt-3">Marking the Beginning</h5>
    <p className="text-muted lead">
      LT&G Credit Line launched its microlending operations by opening its
      first branch in Legazpi City, Albay, signaling its commitment to offering
      accessible financial solutions.
    </p>
    </div>
  </Col>
  {/* Extra Timeline Line for small screens */}
  <Col
    xs={{ span: 1, order: 2 }}
    className="d-md-none position-relative d-flex justify-content-center vertical-height"
  >
    <div className="timeline-vertical"></div>
  </Col>
</Row>
       
        
      </Container>
  )
}

export default TimelineSection
