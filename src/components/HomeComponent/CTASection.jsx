import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { fadeIn } from '../../data/animation';
import { motion } from 'framer-motion';

const MotionContainer = motion(Container);

const CTASection = () => {
  return (
    <MotionContainer 
    fluid
    className='custom-x-padding py-5 '
    variants={fadeIn}
    initial="hidden"
    whileInView="show"
    >
        <Row className="text-center justify-content-center py-5">
          <Col xxl={9} md={12} className='my-5'>
                <h1 className='display-4'>Start Your Journey to Financial Freedom With Our Microlending Franchise</h1>
                <p className='fs-5 fw-light mt-3 text-muted'>Take the first step toward financial success by joining our trusted microlending franchise. Enjoy a proven business model, expert support, and a thriving market. Get started now and grow your own profitable lending business!</p>
                <div className='mt-4'>
                <Button variant='danger' className='me-3' as={Link} to="/franchising">Learn More</Button>
                <Button variant='secondary' as={Link} to="/contact">Join Now</Button>
                </div>
          </Col>
        </Row>
    </MotionContainer>
  );
}

export default CTASection;
