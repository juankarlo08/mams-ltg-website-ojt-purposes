import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './PricingSection.css'
import { fadeIn, childVariant } from '../../data/animation';
import { motion } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);

const PricingSection = () => {
  return (
    <MotionContainer 
    fluid 
    className="py-5 custom-x-padding text-light bg-pricing"
    variants={fadeIn}
    initial="hidden"
    whileInView="show"
    >
      
    <Row className="justify-content-center">
       <div className="text-center my-5">
          <p >Pricing</p>
          <h1 className="display-4">Choose the right plan for you</h1>        
        </div>

      <MotionCol md={4} className="mb-4" variants={childVariant}>
        <Card className="shadow-sm p-4 border-2 border-danger">
          <div className='d-flex justify-content-center'>
              <div className="vps-badge-header fs-5">Junior Branch</div>
          </div>
          <Card.Body>
            <Row >
            <Col className='text-center'>
            <small className="text-muted fst-italic"> Franchise package starts at </small>
               <h2 className="fw-bold text-muted"> ₱2.45M </h2>
                 <hr />
               </Col>
            </Row>
          <Row className='align-items-center'>   
            <Col>
      
            <p className='fw-bold mb-2 '>Franchise Fee</p>
            <h2 className="fw-bold mb-0 ">Php 252,000</h2>
            
            </Col>
              
            </Row>
            
            <Card.Text className="text-muted mt-3">
            An ideal entry-level option for entrepreneurs looking to start with a manageable investment and grow within a smaller market.
            </Card.Text>
          
            <ul className="list-unstyled text-start" >
              <li className='mt-2'>✔ Less Employee Needed </li>
              <li className='mt-2'>✔ Less Required Space</li>
              <li className='mt-2'>✔ Smaller Coverage Area</li>
              <li className='mt-2'>✔ Use of Name, Logo, Trademark</li>
              <li className='mt-2'>✔ Comprehensive Operations Manual</li>
              <li className='mt-2'>✔ Hiring Assistance </li>
              <li className='mt-2'>✔ Research and Development Activities</li>
              <li className='mt-2'>✔ Pre-Opening Support</li>
              <li className='mt-2'>✔ Marketing Support</li>
              <li className='mt-2'>✔ Business Guidance and Support</li>
            </ul>

            <Button variant="danger" as={Link} to="/contact" className="mt-2">Get started today</Button>
           
       
          </Card.Body>
        </Card>
      </MotionCol>

      <MotionCol md={4} className="mb-4" variants={fadeIn}>
        <Card className="shadow-sm p-4 border-2 border-danger">
            <div className='d-flex justify-content-center'>
              <div className="vps-badge-header fs-5 ">Full Branch</div>
          </div>
          <Card.Body>
             <Row >
            <Col className='text-center'>
            <small className="text-muted fst-italic"> Franchise package starts at </small>
               <h2 className="fw-bold text-muted"> ₱3.5M </h2>
                 <hr />
               </Col>
            </Row>
          <Row className='align-items-center'>   
          <Col >
           <p className='fw-bold mb-2'>Franchise Fee</p>
            <h2 className="fw-bold mb-0 ">Php 448,000</h2>
            
              </Col>
       
            </Row>
         
            <Card.Text className="text-muted mt-3">
            A complete franchise package designed for those ready to establish a full-scale operation with broader market reach and higher income potential
            </Card.Text>
            <ul className="list-unstyled text-start">
              <li className='mt-2'>✔ 7-8 Employee Needed </li>
              <li className='mt-2'>✔ At least 30 sqm Required Space</li>
              <li className='mt-2'>✔ Larger Coverage Area</li>
              <li className='mt-2'>✔ Use of Name, Logo, Trademark</li>
              <li className='mt-2'>✔ Comprehensive Operations Manual</li>
              <li className='mt-2'>✔ Hiring Assistance </li>
              <li className='mt-2'>✔ Research and Development Activities</li>
              <li className='mt-2'>✔ Pre-Opening Support</li>
              <li className='mt-2'>✔ Marketing Support</li>
              <li className='mt-2'>✔ Business Guidance and Support</li>
            </ul>
            <Button variant="danger" as={Link} to="/contact" className="mt-2">Get started today</Button>
            
          </Card.Body>
        </Card>
      </MotionCol>
    </Row>
    </MotionContainer>
 

  )
}

export default PricingSection