import React from 'react'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GreatReturns from '../../img/greatreturns.png';
import TimelessIndustry from '../../img/timelessindustry.png';
import LinearOperations from '../../img/linearoperations.png';


const FeatureListSection = () => {
  return (
  
    
    <Container fluid className='custom-x-padding custom-y-padding py-5 bg-light'>
        <Row className='mt-5 justify-content-center'>
            <Col className='mb-5' xxl={10}>
              <h1 className="text-center display-4 fw-bold">Why Choose Our Microlending Franchise?</h1>
              <p className="text-center text-muted lead">Our microlending franchise offers a proven business model with the tools, training, and support you need to succeed. With our trusted brand and efficient system, you can confidently grow your business while making a positive impact in your community.</p>
            </Col>
        </Row>
        <Row className='my-5 text-center justify-content-center gap-5'>
                <Col lg={3} >
                <img src={GreatReturns} style={{height:"50px"}} alt="Great Return Icon" variant="top" />
                         <h5 className='fw-bold mt-4'>Great Returns</h5>
                         <p className='text-muted'>Compared to similarly priced FRANCHISE PACKAGES, LT&G boasts of a relatively faster ROI of 28 MONTHS!</p>
                         <a href="#" className="text-danger text-decoration-none">Learn More →</a>
       
                </Col>       
                <Col lg={3}>
                        <img src={TimelessIndustry} style={{height:"50px"}} alt="Timeless Industry Icon" variant="top" />
                        <h5 className='fw-bold mt-4'>Timeless Industry</h5>
                        <p className='text-muted'> Financial Industry will always be relevant regardless of shifts in the market. You know what they say, "MONEY MAKES THE WORLD GO ROUND".</p>
                        <a href="#" className="text-danger text-decoration-none">Learn More →</a>
             
                </Col>
                <Col lg={3}>
                        <img src={LinearOperations} style={{height:"50px"}} alt="Linear Operations Icon" variant="top" />
                        <h5 className='fw-bold mt-4'>Linear Operations</h5>
                        <p className='text-muted'>The Business System is designed to produce maximum results with minimal effort. Say GOODBYE to concerns regarding SPOILAGE, LOW INVENTORY, or EXPENSIVE RENTALS.</p>
                        <a href="#" className="text-danger text-decoration-none">Learn More →</a>
                </Col>
            </Row>
    </Container>
  )
}

export default FeatureListSection