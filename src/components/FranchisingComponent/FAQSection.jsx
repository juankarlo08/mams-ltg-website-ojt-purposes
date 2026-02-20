import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Styling & Animation
import './FAQSection.css';
import { fadeIn, childVariant } from '../../data/animation';

const MotionContainer = motion(Container);
const MotionRow = motion(Row);

const FAQSection = () => {

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is LT&G Credit Line?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LT&G Credit Line is a micro-lending company dedicated to providing accessible and fair financial solutions to small businesses and individuals, empowering them to achieve their growth and financial goals."
        }
      },
      {
        "@type": "Question",
        "name": "Who can apply for a loan with LT&G Credit Line?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services are geared toward micro and small enterprises, including market vendors, sari-sari store owners, carinderias, vulcanizing shops, and other small businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What are the loan amounts available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer loan amounts ranging from ₱11,000 to ₱100,000, depending on the borrower’s needs and repayment capacity."
        }
      },
      {
        "@type": "Question",
        "name": "What are the requirements to apply for a loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic requirements include a barangay permit and a completed credit investigation to validate the applicant’s existing business."
        }
      },
      {
        "@type": "Question",
        "name": "What is LT&G’s franchising model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LT&G offers a franchise model that allows partners to open and operate their own microlending branches using our proven business system and customized IT platform."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to franchise an LT&G branch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The total investment package ranges from approximately ₱2.45M to ₱3.5M depending on the branch type. The majority of the investment is allocated for lending capital."
        }
      },
      {
        "@type": "Question",
        "name": "What support does LT&G provide to franchisees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LT&G provides comprehensive support including office setup, hiring assistance, staff training, operational guidance, and access to our proprietary IT systems."
        }
      },
      {
        "@type": "Question",
        "name": "Are there opportunities for multi-unit ownership?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, franchisees are encouraged to expand their operations by owning multiple branches as they grow and scale their business."
        }
      }
    ]
  };

  return (
    <MotionContainer 
      fluid 
      className='bg-white custom-x-padding py-5'
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <MotionRow className='my-5' variants={childVariant}>
        <h2 className="display-4 fw-light text-dark">FAQ's</h2>
        
        <h3 className='h4 mt-5 text fw-bold'>LT&G Credit Line</h3>
      
        <Accordion 
          defaultActiveKey={["0"]}
          alwaysOpen 
          flush 
          className='mt-4 custom-accordion'
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <strong>What is LT&G Credit Line?</strong> 
            </Accordion.Header>
            <Accordion.Body>
              <p className='text-muted'>
                LT&G Credit Line is a micro-lending company dedicated to providing accessible and fair financial solutions to small businesses and individuals, empowering them to achieve their growth and financial goals.
              </p>    
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className='border-top'>
            <Accordion.Header>
              <strong>Who can apply for a loan with LT&G Credit Line?</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p className='text-muted'>
                Our services are geared toward micro and small enterprises, including market vendors, sari-sari store owners, carinderias, vulcanizing shops, and other small businesses.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className='border-top'>
            <Accordion.Header>
              <strong>What are the loan amounts available?</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p className='text-muted'>
                We offer loan amounts ranging from ₱11,000 to ₱100,000, depending on the borrower’s needs and repayment capacity.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className='border-top border-bottom'>
            <Accordion.Header>
              <strong>What are the requirements to apply for a loan?</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p className='text-muted'>
                Basic requirements include a barangay permit and a completed credit investigation to validate the applicant’s existing business.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </MotionRow>

      <MotionRow variants={childVariant}>
        <h3 className='h4 mt-5 text-danger fw-bold'>MAMS LT&G Franchising Corp</h3>

        <Accordion 
          defaultActiveKey={["0"]} 
          alwaysOpen 
          flush 
          className='mt-4 custom-accordion'
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <strong>What is LT&G’s franchising model?</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p className='text-muted'>
                LT&G offers a franchise model that allows partners to open and operate their own microlending branches using our proven business system and customized IT platform.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className='border-top'>
            <Accordion.Header>
              <strong>How much does it cost to franchise an LT&G branch?</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p className='text-muted'>
                The total investment package ranges from approximately ₱2.45M to ₱3.5M depending on the branch type. The majority of the investment is allocated for lending capital.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className='border-top'>
            <Accordion.Header>
              <strong>What support does LT&G provide to franchisees?</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p className='text-muted'>
                LT&G provides comprehensive support including office setup, hiring assistance, staff training, operational guidance, and access to our proprietary IT systems.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className='border-top border-bottom'>
            <Accordion.Header>
              <strong>Are there opportunities for multi-unit ownership?</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p className='text-muted'>
                Yes, franchisees are encouraged to expand their operations by owning multiple branches as they grow and scale their business.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </MotionRow>

      <MotionRow className='my-5 text-center text-lg-start' variants={childVariant}>
        <Col className='mt-5'>
          <h4 className='fw-bold'>Still have questions?</h4>
          <p className='mt-2 text-muted'>Our franchise team is ready to assist you.</p>
          <Button variant="danger" as={Link} to="/contact" className="px-5 py-2 fw-bold shadow-sm">
            Contact Us Now
          </Button>
        </Col>
      </MotionRow>
    </MotionContainer>
  );
}

export default FAQSection;