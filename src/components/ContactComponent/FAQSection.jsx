import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './FAQSection.css';

const FAQSection = () => {
    const handleRefresh = () => {
        window.scrollTo(0, 0); // Scroll to top
        
      };
  return (
    <Container fluid className='custom-x-padding py-5'>
        <Row className='my-5'>
        <h1 className="display-4 fw-bold">FAQs</h1>
        <p className="lead text-muted">Here are some common questions about our franchise opportunities, how to get started and our microlending business.</p>
        <h3 className='mt-5'>LT&G Credit Line</h3>
        
    <Accordion defaultActiveKey={["0","1","2","3"]} alwaysOpen flush className='mt-4 custom-accordion'>
     <Accordion.Item eventKey="0">
         <Accordion.Header>
            <div className='fw-bold'>What is LT&G Credit Line?</div> 
         </Accordion.Header>

        <Col xxl={7}>
           <Accordion.Body>
                <p className='text-muted'> LT&G Credit Line is a micro-lending company dedicated to providing accessible and fair financial solutions to small businesses and individuals, empowering them to achieve their growth and financial goals.</p>    
           </Accordion.Body>
        </Col>
     </Accordion.Item>

    <Accordion.Item eventKey="1" className='border-top'>
         <Accordion.Header>
            <div className="fw-bold ">Who can apply for a loan with LT&G Credit Line?</div>
         </Accordion.Header>
        <Col xxl={7}>
        <Accordion.Body>
            <p className='text-muted'>Our services are geared toward micro and small enterprises, including market vendors, sari-sari store owners, carinderias, vulcanizing shops, and other small businesses.</p>
        </Accordion.Body>
        </Col>
    </Accordion.Item>

    <Accordion.Item eventKey="2" className='border-top'>
        <Accordion.Header>
           <div className="fw-bold">What are the loan amounts available?</div>
        </Accordion.Header>
        <Col xxl={7}>
        <Accordion.Body>
         <p className='text-muted'>We offer loan amounts ranging from P11,000 to P100,000, depending on the borrower’s needs and repayment capacity.</p>
        </Accordion.Body>
        </Col>
    </Accordion.Item>

    <Accordion.Item eventKey="3" className='border-top border-bottom'>
        <Accordion.Header>
        <div className="fw-bold">What are the requirements to apply for a loan?</div>
        </Accordion.Header>
    <Col xxl={7}>
    <Accordion.Body>
        <p className='text-muted'>Basic requirements include a barangay permit and a completed credit investigation to validate the applicant’s existing business.</p>
    </Accordion.Body>
    </Col>
    </Accordion.Item>
  </Accordion>
  </Row>

  <Row>
     <h3 className='mt-5'>MAMS LT&G Franchising Corp </h3>
     <Accordion defaultActiveKey={["0","1","2","3"]} alwaysOpen flush className='mt-4 custom-accordion'>
     <Accordion.Item eventKey="0">
         <Accordion.Header >
         <div className="fw-bold">What is LT&G’s franchising model?</div>
         </Accordion.Header>
        <Col xxl={7}>
        <Accordion.Body>
            <p className='text-muted'>LT&G offers a franchise model that allows partners to open and operate their own microlending branches using our proven business system and customized IT platform.</p>
        </Accordion.Body>
        </Col>    
    </Accordion.Item>

    <Accordion.Item eventKey="1" className='border-top'>
         <Accordion.Header>
    <div className="fw-bold">How much does it cost to franchise an LT&G branch?</div>
         </Accordion.Header>
    <Col xxl={7}>   
    <Accordion.Body>
       <p className='text-muted'> The total investment package is approximately P3.5 million, with a franchise fee of P448,000. The majority of the investment is used for lending capital.</p>
        </Accordion.Body>
    </Col>
        

    </Accordion.Item>
    <Accordion.Item eventKey="2" className='border-top'>
        <Accordion.Header>
        <div className="fw-bold">What support does LT&G provide to franchisees?</div>
        </Accordion.Header>
        <Col xxl={7}>
        <Accordion.Body>
        <p className='text-muted'> LT&G offers comprehensive support, including setting up the office, sourcing and hiring, training the staff and franchisee, and providing access to our proprietary sales and collection system. We ensure franchisees have the tools and knowledge needed to run their business successfully.</p>
        </Accordion.Body>
        </Col>
        

    </Accordion.Item>
    <Accordion.Item eventKey="3" className='border-top border-bottom'>
        <Accordion.Header>
            <div className="fw-bold">Are there opportunities for multi-unit ownership?</div>
        </Accordion.Header>
        <Col xxl={7}>
        <Accordion.Body>
        <p className='text-muted'>Yes, LT&G encourages franchisees to expand their operations by owning multiple branches as they gain experience and demonstrate success.</p>
        </Accordion.Body>
        </Col>
    </Accordion.Item>
  </Accordion>
  </Row>
  <Row className='my-5'>
    <Col className='mt-5'>
    <h3> Still have questions?</h3>
    <p className='mt-3'>We're here to help you!</p>
    <Button variant="danger" onClick={handleRefresh}>Contact</Button>
    </Col>
  </Row>
  </Container>
  )
}

export default FAQSection