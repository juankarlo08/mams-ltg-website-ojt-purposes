import React from 'react'
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ContactFormSection = () => {
    const [agreed, setAgreed] = useState(false);
  return (
  //   <Container className="py-5">
  //   <Row className="justify-content-center">
  //     <Col md={8} lg={6}>
  //       <h2 className="text-center mb-4">Contact Sales</h2>
  //       <p className="text-center text-muted mb-4">
  //         Aute magna irure deserunt veniam aliqua magna enim voluptate.
  //       </p>
  //       <Form>
  //         <Row className="mb-3">
  //           <Col>
  //             <Form.Group controlId="first-name">
  //               <Form.Label>First Name</Form.Label>
  //               <Form.Control type="text" placeholder="Enter first name" />
  //             </Form.Group>
  //           </Col>
  //           <Col>
  //             <Form.Group controlId="last-name">
  //               <Form.Label>Last Name</Form.Label>
  //               <Form.Control type="text" placeholder="Enter last name" />
  //             </Form.Group>
  //           </Col>
  //         </Row>

  //         <Form.Group controlId="email" className="mb-3">
  //           <Form.Label>Email</Form.Label>
  //           <Form.Control type="email" placeholder="Enter email" />
  //         </Form.Group>

  //         <Form.Group controlId="phone-number" className="mb-3">
  //           <Form.Label>Phone Number</Form.Label>
  //           <Form.Control type="text" placeholder="Enter phone number" />
  //         </Form.Group>

  //         <Form.Group controlId="message" className="mb-3">
  //           <Form.Label>Message</Form.Label>
  //           <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
  //         </Form.Group>

  //         <Form.Group controlId="terms" className="mb-3">
  //           <Form.Check
  //             type="checkbox"
  //             label="By selecting this, you agree to our privacy policy."
  //             checked={agreed}
  //             onChange={(e) => setAgreed(e.target.checked)}
  //           />
  //         </Form.Group>

  //         <Button variant="primary" type="submit" className="w-100">
  //           Let's talk
  //         </Button>
  //       </Form>
  //     </Col>
  //   </Row>
  // </Container>
  <Container fluid className="custom-x-padding py-5">
  <Row className="justify-content-center">
    <Col md={6}>
      <h5 className="text-muted">Connect</h5>
      <h2 className="fw-bold">Get in Touch</h2>
      <p>We're here to answer your questions and provide support.</p>

      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
    
          <Form.Group controlId="phone-number" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
           <Form.Control type="text" placeholder="Enter phone number" />
           </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
        </Form.Group>

        <Form.Group controlId="terms" className="mb-3">
          <Form.Check
               type="checkbox"
              label="By selecting this, you agree to our privacy policy."
               checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
             />
         </Form.Group>

        <Button variant="dark" type="submit">Submit</Button>
      </Form>
    </Col>

    {/* Placeholder for an image */}
    <Col md={6} className="d-flex align-items-center justify-content-center">
      <div style={{
        width: "100%",
        height: "300px",
        backgroundColor: "#ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <span>Image Placeholder</span>
      </div>
    </Col>
  </Row>
</Container>
  )
}

export default ContactFormSection