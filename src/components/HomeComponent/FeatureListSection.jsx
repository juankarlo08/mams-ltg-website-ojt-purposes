import React from 'react'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GreatReturns from '../../img/greatreturns.png';
import TimelessIndustry from '../../img/timelessindustry.png';
import LinearOperations from '../../img/linearoperations.png';


const FeatureListSection = () => {
  return (
        <Container fluid className='custom-x-padding py-5'>
             <Row className='my-5 justify-content-center'>
                 <Col xxl={10}>
                         <h1 className="text-center display-4 fw-bold">Why Choose Our Microlending Franchise?</h1>
                         <p className="text-center text-muted lead">Our microlending franchise offers a proven business model with the tools, training, and support you need to succeed. With our trusted brand and efficient system, you can confidently grow your business while making a positive impact in your community.</p>
                 </Col>
         </Row>
        <Row className="my-5">
          <Col lg={4} className='my-3'>
            <div className="d-flex align-items-center">
            <img src={GreatReturns} style={{height:"30px", width:"auto"}} className='me-3' alt="Great Return Icon" variant="top" />
              <h4 className="m-0 fw-bold">Great Returns</h4>
            </div>
            <p className="my-4 me-2">
              Compared to similarly priced franchise packages, LT&G offers a significantly
              faster ROI—just 28 months!
            </p>
            <a href="#" className="text-danger text-decoration-none mb-4">Learn More →</a>
          </Col>
          <Col lg={4} className='my-3'>
            <div className="d-flex align-items-center">
            <img src={TimelessIndustry} style={{height:"30px", width:"auto"}} className='me-3' alt="Timeless Industry Icon" variant="top" />
              <h4 className="m-0 fw-bold">Timeless Industry</h4>
            </div>
            <p className="my-4 me-2">
              The financial industry remains relevant regardless of market shifts. After all,
              they say, 'Money makes the world go round!'
            </p>
            <a href="#" className="text-danger text-decoration-none mb-4">Learn More →</a>
          </Col>
          <Col lg={4} className='my-3'>
            <div className="d-flex align-items-center">
            <img src={LinearOperations} style={{height:"30px", width:"auto"}} className='me-3' alt="Linear Operations Icon" variant="top" />
              <h4 className="m-0 fw-bold">Linear Operations</h4>
            </div>
            <p className="my-4 me-2">
              Our business system is designed to deliver maximum results with minimal effort.
              Say goodbye to worries about spoilage, low inventory, or costly rentals!
            </p>
            <a href="#" className="text-danger text-decoration-none">Learn More →</a>
          </Col>
        </Row>
      </Container>
    
//     <Container fluid className='custom-x-padding custom-y-padding py-5'>
//         <Row className='mt-5 justify-content-center'>
//             <Col className='mb-5' xxl={10}>
//               <h1 className="text-center display-4 fw-bold">Why Choose Our Microlending Franchise?</h1>
//             </Col>
//         </Row>
//         <Row className='my-5'>
//                 <Col lg={4} >
//                 <div className="d-flex align-items-center justify-content-center">
//                 <img src={GreatReturns} style={{height:"30px", width:"auto"}} alt="Great Return Icon" variant="top" />
//                          <h5 className='fw-bold'>Great Returns</h5>
//                          <p>Compared to similarly priced FRANCHISE PACKAGES, LT&G boasts of a relatively faster ROI of 28 MONTHS!</p>
//                         <Button variant='none' className="text-danger">Learn More → </Button>
                     
//                 </div>
//                 </Col>       
//                 <Col lg={4}>
//                         <img src={TimelessIndustry} className="feature-list-pic" alt="Timeless Industry Icon" variant="top" />
        
//                             <h5 className='fw-bold'>Timeless Industry</h5>
         
//                                    <p> Financial Industry will always be relevant regardless of shifts in the market. You know what they say, "MONEY MAKES THE WORLD GO ROUND".</p>
               
//                                 <Button variant='none' className="text-danger">Learn More → </Button>
             
//                 </Col>
//                 <Col lg={4}>
//                         <img src={LinearOperations} className="feature-list-pic" alt="Linear Operations Icon" variant="top" />
//                         <h5 className='fw-bold'>Linear Operations</h5>
//                         <p className='text-muted'>The Business System is designed to produce maximum results with minimal effort. Say GOODBYE to concerns regarding SPOILAGE, LOW INVENTORY, or EXPENSIVE RENTALS.</p>
//                         <Button variant='none' className="text-danger">Learn More → </Button>
//                 </Col>
//             </Row>
//     </Container>
    
  )
}

export default FeatureListSection