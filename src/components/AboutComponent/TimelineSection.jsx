import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './TimelineSection.css'
import FirstPic from '../../img/first-pic.jpg'
import SecondPic from '../../img/second-pic.jpg'
import ThirdPic from '../../img/third-pic.jpg'
import FourthPic from '../../img/fourth-pic.jpg'
import FifthPic from '../../img/fifth-pic.jpg'
import SixthPic from '../../img/sixth-pic.jpg'

const TimelineSection = () => {
  return (
    
  <Container fluid className="py-5 custom-x-padding">

  <Row className='justify-content-center my-5'>
    <Col xxl={7} className='text-center'>
        <p className='text-center mb-2 fw-bold'>Better Loans, Better Lives</p>
        <h1 className="display-4 fw-bold text-center">Milestones of Growth</h1>
        <p className="lead text-muted text-center mb-4">Every step marks our dedication to providing reliable credit solutions. 
        Together, we've built a legacy of progress and partnership.</p>
        <div className='mb-5'>
        <Button variant='danger' href='#/contact'>Become a Franchisee</Button>
        </div>
        
    </Col>    
  </Row>

    {/* //////////////////111111//////////////////////////////// */}
  <Row className="mt-5 mt-md-3 justify-content-center">
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

{/* //////////////////////222222222////////////////////////////////// */}
<Row className="justify-content-center">
  {/* Left: Image Placeholder */}
  <Col
    md={{ span: 5, order: 3 }}
    xs={{ span: 11, order: 3 }}
    className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-start mt-md-0"
  >
    <div className="text-center">
      <img src={SecondPic} alt="First Pic" className="pic-holder img-fluid" />
    </div>
  </Col>
  {/* Center: Timeline Line and Dot */}
  <Col
    md={{ span: 1, order: 2 }}
    xs={{ span: 1, order: 1 }}
    className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
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
    className="position-relative pe-4 py-5 d-flex flex-column text-start text-md-end justify-content-end justify-content-lg-start"
  >
    <div>
    <h4 className="fw-bold text-danger m-0 pt-4">2018</h4>
    <h5 className="fw-semibold mt-3">First Franchise Branch</h5>
    <p className="text-muted lead">
    LT&G Credit Line reached a key milestone by opening its first 
    franchise branch, initiating the brand’s expansion through 
    franchising to extend its financial services to more communities.
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

    {/* ////////////////33333333///////////////////////////    */}
<Row className="justify-content-center">
  {/* Left: Image Placeholder */}
  <Col
    md={{ span: 5, order: 1 }}
    xs={{ span: 11, order: 3 }}
    className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-end mt-md-0"
  >
    <div className="text-center">
      <img src={ThirdPic} alt="First Pic" className="pic-holder img-fluid" />
    </div>
  </Col>
  {/* Center: Timeline Line and Dot */}
  <Col
    md={{ span: 1, order: 2 }}
    xs={{ span: 1, order: 1 }}
    className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
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
    className="position-relative pe-4 py-4 d-flex flex-column justify-content-end justify-content-lg-start pt-5"
  >
    <div>
    <h4 className="fw-bold text-danger m-0 pt-3">2019</h4>
    <h5 className="fw-semibold mt-3">25 Branches Nationwide</h5>
    <p className="text-muted lead">
    By 2019, LT&G Credit Line had grown to 25 branches nationwide, 
    demonstrating its rapid expansion and increasing demand for its 
    financial services across the country.
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

{/* /////////////////4444////////////////////////// */}

<Row  className="justify-content-center">
  {/* Left: Image Placeholder */}
  <Col
    md={{ span: 5, order: 3 }}
    xs={{ span: 11, order: 3 }}
    className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-start mt-md-0"
  >
    <div className="text-center">
      <img src={FourthPic} alt="First Pic" className="pic-holder img-fluid" />
    </div>
  </Col>
  {/* Center: Timeline Line and Dot */}
  <Col
    md={{ span: 1, order: 2 }}
    xs={{ span: 1, order: 1 }}
    className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
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
    className="position-relative pe-4 py-5 d-flex flex-column text-start text-md-end justify-content-end justify-content-lg-start"
  >
    <div>
    <h4 className="fw-bold text-danger m-0 pt-4">2020</h4>
    <h5 className="fw-semibold mt-3">38 Branches Nationwide</h5>
    <p className="text-muted lead">
    In 2020, LT&G Credit Line continued its rapid expansion, 
    reaching a total of 38 branches across the Philippines.
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



    {/* ////////////////5555555///////////////////////////    */}
<Row className="justify-content-center">
  {/* Left: Image Placeholder */}
  <Col
    md={{ span: 5, order: 1 }}
    xs={{ span: 11, order: 3 }}
    className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-end mt-md-0"
  >
    <div className="text-center">
      <img src={FifthPic} alt="First Pic" className="pic-holder img-fluid" />
    </div>
  </Col>
  {/* Center: Timeline Line and Dot */}
  <Col
    md={{ span: 1, order: 2 }}
    xs={{ span: 1, order: 1 }}
    className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
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
    className="position-relative pe-4 py-4 d-flex flex-column justify-content-end justify-content-lg-start pt-5"
  >
    <div>
    <h4 className="fw-bold text-danger m-0 pt-3">2021</h4>
    <h5 className="fw-semibold mt-3">49 Branches Nationwide</h5>
    <p className="text-muted lead">
    In 2021, LT&G Credit Line expanded its presence to 49 branches nationwide, 
    reinforcing its commitment to making financial services more accessible to Filipinos.
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

{/* ///////////////66666///////////////////// */}

<Row className="justify-content-center mb-5">
  {/* Left: Image Placeholder */}
  <Col
    md={{ span: 5, order: 3 }}
    xs={{ span: 11, order: 3 }}
    className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-start mt-md-0"
  >
    <div className="text-center">
      <img src={SixthPic} alt="First Pic" className="pic-holder img-fluid" />
    </div>
  </Col>
  {/* Center: Timeline Line and Dot */}
  <Col
    md={{ span: 1, order: 2 }}
    xs={{ span: 1, order: 1 }}
    className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
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
    className="position-relative pe-4 py-5 d-flex flex-column text-start text-md-end justify-content-end justify-content-lg-start"
  >
    <div>
    <h4 className="fw-bold text-danger m-0 pt-4">2025</h4>
    <h5 className="fw-semibold mt-3">On the Road to 100 Branches</h5>
    <p className="text-muted lead">
    LT&G Credit Line is on track to reach 100 branches nationwide 
    by the end of 2025, highlighting its ongoing commitment to 
    expanding access to financial services across the country.
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
