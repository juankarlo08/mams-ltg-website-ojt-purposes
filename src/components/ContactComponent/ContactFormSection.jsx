import React from 'react'
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './ContactFormSection.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { fadeIn, childVariant } from '../../data/animation';
import { motion } from 'framer-motion';

const MotionCol = motion(Col);
const MotionContainer = motion(Container);

const ContactFormSection = () => {
    const [agreed, setAgreed] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_vzuimwx", "template_3ppg2br", form.current, "iwktTW9wrz2sNwx_T")
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                title: "Good job!",
                text: "Successfully Submit",
                icon: "success",
                confirmButtonColor: "#b62525"
              })
          }, (error) => {
              console.log(error.text);
              Swal.fire({
                title: "Error",
                text: "Submit Failed, Please Try Again",
                icon: "error",
                confirmButtonColor: "#b62525"
              })
          });
          e.target.reset();
      };
  
  return (
  <MotionContainer 
  fluid
  variants={fadeIn}
  initial="hidden"
  whileInView="show"
  >
  <Row variants={childVariant}>
    <Col md={6} className=" text-light bg-contact custom-x-padding custom-y-padding">
      <motion.div variants={childVariant}>
    <Row className='my-4'>
      <Col>
      <h1 className="display-4">Contact Us</h1>
      <p className='fs-5 fw-light text-secondary'>We're here to answer your questions and provide support.</p> 
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
      <p> <a className="text-light" href="mailto:franchise@ltgcreditline.com">franchise@ltgcreditline.com</a></p> 
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
    </motion.div>
    </Col>

    <Col md={6} className='text-white bg-info custom-x-padding custom-y-padding'>
    <motion.div variants={childVariant}>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name*</Form.Label>
          <Form.Control className="bg-color" type="text" name="name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email *</Form.Label>
          <Form.Control className="bg-color" type="email" name="email" required/>
        </Form.Group>
          <Form.Group controlId="phone-number" className="mb-3">
            <Form.Label>Mobile Number *</Form.Label>
           <Form.Control className="bg-color" type="text" name="number" required/>
           </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message *</Form.Label>
          <Form.Control className="bg-color" as="textarea" name="message" rows={4} required/>
        </Form.Group>
        <Form.Group controlId="terms" className="mb-3">
          <Form.Check
               type="checkbox"
               checked={agreed}
               onChange={(e) => setAgreed(e.target.checked)}
               required
               feedback="You must agree before submitting."
              feedbackType="invalid"
               label={
                <>
                  By selecting this, you agree to our{' '}
                  <a onClick={handleShow} rel="noopener noreferrer" className='text-decoration-underline text-light '>
                    privacy policy
                  </a>.
              
                </>
              
              }
     
             />
         </Form.Group>
        <Button variant="danger" type="submit">Submit</Button>
      </Form>
      </motion.div>
    </Col>

  </Row>

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Privacy Policy</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p><strong>Effective Date:</strong> April 11, 2025</p>
        <p>
    At <strong>MAMS LT&G Franchising Corp</strong>, we value your privacy and are committed to protecting the personal information you share with us. 
    This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or interact with our services.
  </p>

  <h4>1. Information We Collect</h4>
  <h5>a. Personal Information:</h5>
  <ul>
    <li>Name</li>
    <li>Email address</li>
    <li>Contact number</li>
    <li>Home or business address</li>
    <li>Government-issued ID numbers (if applying for a loan or franchise)</li>
    <li>Financial information (for credit checks or franchise evaluation)</li>
  </ul>

  <h5>b. Business Information:</h5>
  <ul>
    <li>Business name and details (if applying as a franchisee)</li>
    <li>Location preferences</li>
    <li>Income or financial standing</li>
  </ul>

  <h5>c. Usage Data:</h5>
  <ul>
    <li>IP address</li>
    <li>Browser type</li>
    <li>Pages visited and time spent on the website</li>
  </ul>

  <h4>2. How We Use Your Information</h4>
  <ul>
    <li>To assess and process franchise or loan applications</li>
    <li>To communicate with you regarding your inquiry or application</li>
    <li>To comply with regulatory requirements</li>
    <li>To improve our website and services</li>
    <li>To send updates, announcements, or promotional materials (only if you opt-in)</li>
  </ul>

  <h4>3. Sharing and Disclosure</h4>
  <p>
    We do <strong>not</strong> sell or rent your personal information. We may only share it with:
  </p>
  <ul>
    <li>Our internal team and partner branches involved in the application or inquiry process</li>
    <li>Third-party service providers (e.g. hosting, email, credit verification) under strict confidentiality</li>
    <li>Regulatory bodies, if required by law</li>
  </ul>

  <h4>4. Data Security</h4>
  <p>
    We implement appropriate technical and administrative safeguards to protect your personal data from loss, unauthorized access, or misuse.
  </p>

  <h4>5. Your Data Rights</h4>
  <p>You have the right to:</p>
  <ul>
    <li>Access or request a copy of your personal data</li>
    <li>Correct inaccurate or outdated information</li>
    <li>Withdraw consent to data processing</li>
    <li>Request deletion of your data, subject to legal and operational limitations</li>
  </ul>
  <p>To make any such requests, email us at <a href="mailto:franchise@ltgcreditline.com">franchise@ltgcreditline.com</a>.</p>

  <h4>6. Cookies</h4>
  <p>
    Our site uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, but this may affect certain features of the site.
  </p>

  <h4>7. Third-Party Links</h4>
  <p>
    Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.
  </p>

  <h4>8. Updates to This Policy</h4>
  <p>
    We may update this Privacy Policy from time to time. Any significant changes will be posted on this page with the new effective date.
  </p>

  <h4>9. Contact Us</h4>
  <p>If you have any questions or concerns about this Privacy Policy or how we handle your data, feel free to contact us:</p>
  <ul>
    <li><strong>Email:</strong> <a href="mailto:franchise@ltgcreditline.com">franchise@ltgcreditline.com</a></li>
    <li><strong>Phone:</strong> Globe +63 967 350 7944</li>
  </ul>
        </Modal.Body>
      </Modal>

</MotionContainer>
  )
}

export default ContactFormSection