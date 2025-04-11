import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutHeaderSection.css';


const AboutHeaderSection = () => {
  return (
    <Container fluid className=' bg-about custom-x-padding py-5 text-light text-center '>
        <Row className=' my-5 justify-content-center'>
        <Col lg={9} className='my-5'>
             <h6 className='fw-bold'>About</h6>
            <h1 className="fw-bold display-4">LT&G Credit Line </h1>
            <p className='mt-4 lead'>
            LT&G Credit Line offers loans to micro-entrepreneurs for operational or growth capital, 
            providing customized credit, flexible terms, risk-handling insurance, and value-added services.
  

            LT&G is committed to empowering small businesses and families through fair, reliable, and accessible 
            financial solutions. Guided by the principle "better loans, better lives," we promote financial 
            stability, improved livelihoods, and community growth through responsible lending.
            </p>
            </Col>
          
        </Row>
        <Row className='justify-content-between'>
           <Col lg={5} className='my-5'>
            <h1 className="fw-bold display-4">Vision </h1>
            <p className='lead'>
            To become the leading force in microlending, empowering entrepreneurs and fostering business growth throughout the nation. 
            </p>
           
            </Col>
            <Col lg={5} className='my-5'>
            <h1 className="fw-bold display-4">Mission </h1>
              <p className='lead'>
              To be the trusted partner for entrepreneurs and families, providing fair and accessible financial solutions that empower growth. We strive to equip our clients with financial tools, resources, and guidance needed to plan, operate, and expand their ventures, creating sustainable economic opportunities and vibrant communities.
              Our commitment to responsible lending supports financial stability and community development.

            </p>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutHeaderSection