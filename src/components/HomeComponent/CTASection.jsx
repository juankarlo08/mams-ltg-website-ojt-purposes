import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CTAPic from '../../img/angeles-2.jpg';

const CTASection = () => {
  return (
    <Container fluid className='custom-x-padding py-5'>
        <Row className="text-center justify-content-center py-5">
          <Col xxl={9} md={12} className='my-5'>
                <h1 className='display-4 fw-bold'>Start Your Journey to Financial Freedom With Our Microlending Franchise</h1>
                <p className='lead mt-3 text-muted'>Take the first step toward financial success by joining our trusted microlending franchise. Enjoy a proven business model, expert support, and a thriving market. Get started now and grow your own profitable lending business!</p>
                <div className='mt-4'>
                <Button variant='danger' className='me-3' href='#/franchising'>Learn More</Button>
                <a href="#/contact" className="text-dark text-decoration-none" >Sign up -→</a>
                </div>
          </Col>
        </Row>
    </Container>
  );
}

export default CTASection;
