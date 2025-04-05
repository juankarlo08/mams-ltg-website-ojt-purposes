import React from 'react'
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './ContactFormSection.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

const ContactFormSection = () => {
    const [agreed, setAgreed] = useState(false);
  return (
  <Container fluid>
  <Row>
    <Col md={6} className=" text-light bg-contact custom-x-padding custom-y-padding">
    <Row className='my-4'>
      <Col>
      <h1 className="fw-bold display-4">Contact Us</h1>
      <p className='lead text-secondary'>We're here to answer your questions and provide support.</p> 
      </Col>
    </Row>
    <Row className='align-items-center my-2'>
      <Col xs={1} className='me-2'>
      <h3><FaFacebookSquare /></h3>
      </Col>
      <Col>
      <a href="https://www.facebook.com/mamsltg" className='text-light'>MAMS LT&G Franchising Corp</a>
      </Col>
    </Row>
    <Row className='align-items-center my-2'>
      <Col xs={1} className='me-2'>
      <h3><BiSolidPhoneCall /></h3>
      </Col>
      <Col className='mt-2'>
      <p>Globe +63 967 350 7944</p> 
      </Col>
    </Row>
    <Row className='align-items-center my-2'>
      <Col xs={1} className='me-2'>
      <h3><MdEmail /></h3>
      </Col>
      <Col className='mt-2'>
      <p> franchise@ltgcreditline.com</p> 
      </Col>
    </Row>
    <Row className='my-3'>
      <Col xs={1} className='me-2 '>
      <h3><FaBuilding /></h3>
      </Col>
      <Col className='border-start ps-3 d-flex flex-column'>
      <a className="fw-bold text-light" href="https://maps.app.goo.gl/HsrczHwY2VsFhg3r7">Bicol Office</a>
      <small className='mt-2'> 2/F, Soliman Bldg, Imelda Roces Ave, Tahao Road, Legazpi City</small> 
      </Col>
      <Col className='border-start ps-3 d-flex flex-column'>
      <a className="fw-bold text-light" href="https://maps.app.goo.gl/9j2KKx84g4is6soUA">Manila Office</a>
      <small className='mt-2'> 2/F Unit V, TFN Building, 963 Gen Kalentong Cor.Haig St, Daang Bakal, Mandaluyong, 1550 Metro Manila</small> 
      </Col>
     
    </Row>
  
     
      
    </Col>
    <Col md={6} className='text-white bg-info custom-x-padding custom-y-padding'>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control className="bg-color" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className="bg-color" type="email" />
        </Form.Group>
    
          <Form.Group controlId="phone-number" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
           <Form.Control className="bg-color" type="text" />
           </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control className="bg-color" as="textarea" rows={4} />
        </Form.Group>

        <Form.Group controlId="terms" className="mb-3">
          <Form.Check
               type="checkbox"
              label="By selecting this, you agree to our privacy policy."
               checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
             />
         </Form.Group>

        <Button variant="danger" type="submit">Submit</Button>
      </Form>
    </Col>

  </Row>
</Container>
  )
}

export default ContactFormSection