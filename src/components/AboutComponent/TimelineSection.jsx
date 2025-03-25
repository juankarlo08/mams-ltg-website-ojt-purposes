import React from 'react'
import './TimelineSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TimelineSection = () => {
    
  return (
    <Container fluid className='custom-x-padding py-5 timeline-section bg-light'>
      <Row className='timeline-items'>
        <Col className='timeline-item'>
          <div class="timeline-dot"></div>
          <div class="timeline-date">2015</div>
          <div class="timeline-content">
            <h3>timeline item title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Col>
        <Col className='timeline-item'>
          <div class="timeline-dot"></div>
          <div class="timeline-date">2015</div>
          <div class="timeline-content">
            <h3>timeline item title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Col>
        <Col className='timeline-item'>
          <div class="timeline-dot"></div>
          <div class="timeline-date">2015</div>
          <div class="timeline-content">
            <h3>timeline item title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Col>
        <Col className='timeline-item'>
          <div class="timeline-dot"></div>
          <div class="timeline-date">2015</div>
          <div class="timeline-content">
            <h3>timeline item title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Col>
        <Col className='timeline-item'>
          <div class="timeline-dot"></div>
          <div class="timeline-date">2015</div>
          <div class="timeline-content">
            <h3>timeline item title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Col>
        <Col className='timeline-item'>
          <div class="timeline-dot"></div>
          <div class="timeline-date">2015</div>
          <div class="timeline-content">
            <h3>timeline item title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Col>
        <Col className='timeline-item'>
          <div class="timeline-dot"></div>
          <div class="timeline-date">2015</div>
          <div class="timeline-content">
            <h3>timeline item title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Col>
      </Row>
  </Container>
  )
}

export default TimelineSection
