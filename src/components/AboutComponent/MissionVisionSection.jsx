import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MissionVisionSection = () => {
  return (
    <Container fluid className='custom-x-padding py-5 bg-info'>
    <Row className='my-5'>
      <Col lg={6} className='border-start border-secondary p-5'>
      <h1 className='fw-bold text-light mb-3'>Mission</h1>
      <p className='text-secondary lead'> To be the trusted partner for entrepreneurs and families, 
        providing fair and accessible financial solutions that empower growth. We strive to equip our 
        clients with financial tools, resources, and guidance needed to plan, operate, and expand their 
        ventures, creating sustainable economic opportunities and vibrant communities. Our commitment to 
        responsible lending supports financial stability and community development.
</p>
      
      </Col>
      <Col lg={6} className='border-start border-secondary p-5'>
      <h1 className='fw-bold text-light mb-3'>Vision</h1>
      <p className='text-secondary lead'> To become the leading force in microlending, empowering entrepreneurs and 
fostering business growth throughout the nation. 

</p>
      
      </Col>
    </Row>
  </Container>
  )
}

export default MissionVisionSection