import React from 'react'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GreatReturns from '../../img/greatreturns.png';
import TimelessIndustry from '../../img/timelessindustry.png';
import LinearOperations from '../../img/linearoperations.png';
import { fadeIn, childVariant } from '../../data/animation';
import { motion } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);

const FeatureListSection = () => {
  return (
    <MotionContainer fluid className='custom-x-padding py-5' variants={fadeIn} initial="hidden" whileInView="show">
      <Row className='mt-5 justify-content-center'>        
        <Col className='my-5' xxl={10}>
          <h1 className="text-center display-4">Why Choose Our Microlending Franchise?</h1>
        </Col>
      </Row>
      <Row className='my-5 text-center justify-content-center gap-5'>
        <MotionCol lg={3} variants={childVariant} >
          <img src={GreatReturns} style={{height:"50px"}} alt="Great Return Icon" variant="top" />
          <h5 className='fw-bold mt-4'>Great Returns</h5>
          <p className='text-muted'>Compared to similarly priced FRANCHISE PACKAGES, LT&G boasts of a relatively faster ROI of 28 MONTHS!</p>
        </MotionCol>       
        <MotionCol lg={3} variants={childVariant}>
          <img src={TimelessIndustry} style={{height:"50px"}} alt="Timeless Industry Icon" variant="top" />
          <h5 className='fw-bold mt-4'>Timeless Industry</h5>
          <p className='text-muted'> Financial Industry will always be relevant regardless of shifts in the market. You know what they say, "MONEY MAKES THE WORLD GO ROUND".</p>
        </MotionCol>
        <MotionCol lg={3} variants={childVariant}>
          <img src={LinearOperations} style={{height:"50px"}} alt="Linear Operations Icon" variant="top" />
          <h5 className='fw-bold mt-4'>Linear Operations</h5>
          <p className='text-muted'>The Business System is designed to produce maximum results with minimal effort. Say GOODBYE to concerns regarding SPOILAGE, LOW INVENTORY, or EXPENSIVE RENTALS.</p>
        </MotionCol>
      </Row>
    </MotionContainer>
  )
}

export default FeatureListSection