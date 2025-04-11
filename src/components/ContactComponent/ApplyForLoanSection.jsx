import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplforLoanPic from '../../img/apply-for-loan-img.jpeg'
import Button from 'react-bootstrap/Button';


const ApplyForLoanSection = () => {
  return (
    <Container fluid className='custom-x-padding py-5'>
    <Row className='d-flex  flex-column flex-md-row align-items-center my-5 border rounded-5'>
        <Col md={6} sm={12} className='mt-md-5 mt-sm-5 ps-md-5 '>
        <h1 className="display-4 fw-bold mt-3">Loan Application & Inquiries</h1>
        <p className='lead mt-3'>
        To apply for a loan or make an inquiry, simply visit our <span className='fw-bold'> Branches</span> page. There, you can find the nearest branch, along with its address and contact details.
        For more information, feel free to contact any of our branches.
          </p>
          
        <p className='lead mt-3 text-muted fst-italic'>LT&G Credit Line is open from Monday to Saturday.</p>
        <div className='my-4'>
            <Button href='#/branches' variant='danger' className='mb-3'>Find a Branch Near You</Button>
        </div>
        </Col>

        <Col md={6} sm={12} className='d-flex justify-content-end'>
        <img src={ApplforLoanPic} className='img-fluid rounded-5' style={{maxHeight:"650px"}} alt='stats pic' />
        
        </Col>
        
    </Row>
    </Container>
  )
}

export default ApplyForLoanSection