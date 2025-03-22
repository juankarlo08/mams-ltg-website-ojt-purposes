import React from 'react';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, FormControl} from "react-bootstrap";
import SearchImg from '../../assets/search.png';
import BranchesData from '../../data/branchesdata';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg from '../../img/angeles.jpg';
import './BranchSection.css'
import Accordion from 'react-bootstrap/Accordion';



const BranchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

const filteredBranches = BranchesData.filter(branch =>
  branch.branch_name.toLowerCase().includes(searchTerm.toLowerCase())
  &&
  (regionFilter === "All" || branch.region === regionFilter)
);

  return (
    <Container fluid className="custom-x-padding py-5">
      <Row className='bg-light bo p-4 align-items-center rounded-4'>
        <Col md={6}className='d-flex justify-content-center justify-content-md-start'>
            <Form>
              <InputGroup className='my-2'>
                <InputGroup.Text className='bg-white border-end-0 ' >
                  <img
                    src={SearchImg}
                    alt="Search"
                    width="20"
                    height="20"
                  />
                </InputGroup.Text>
                <FormControl 
                type="text" 
                placeholder="Search..." 
                className='border-start-0 py-2 pe-5' 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
              </InputGroup>
            </Form>
        </Col>
        <Col md={6} className='d-flex justify-content-center justify-content-md-start'>
        <div className='me-3 mt-2'>
          <p>Filter by:</p>
        </div>
        <div>
          <Form.Select 
          className='py-2'  
          value={regionFilter} 
          onChange={(e) => setRegionFilter(e.target.value)}>
            <option>All</option>
            <option>Luzon</option>
            <option>Visayas</option>
            <option>Mindanao</option>
            <option>Metro Manila</option>
          </Form.Select>
          </div>
        </Col>
      </Row>

    {/* Large Screen View */}
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="1">
      <Row className='mt-5 d-none d-lg-flex'>    
          <Col lg={5}>
          <div className="rounded-3 shadow-sm p-3 border-dark-subtle mb-3" style={{ maxHeight: "500px", overflowY: "auto"}}>
            <ListGroup>

              {filteredBranches.length > 0 ? (
            filteredBranches.map((branchesdata) => (
              <ListGroup.Item className="border-end-0 border-start-0 rounded-0" key={branchesdata.id} eventKey={branchesdata.id}>
                {branchesdata.branch_name}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No branches found</ListGroup.Item>
          )}
              
             
            </ListGroup>
            </div>
          </Col>
        
          
          <Col>
            <Tab.Content>
            {BranchesData.map((branchesdata) => (
              <Tab.Pane eventKey={branchesdata.id} key={branchesdata.id}>
                <Card className="shadow-sm border-light-subtle p-3" style={{ maxWidth: "55rem" }}>
                  <Card.Header as="h4" className='bg-white'>{branchesdata.branch_name}</Card.Header>
                  <Row>
                  <Col>
                  <Card.Body>
                    <Card.Text>
                      <h6 className='mt-4'>Address:</h6>
                      <p> {branchesdata.address}</p>
                    </Card.Text>
                    <Card.Text>
                      <h6 className='mt-4'>Contact:</h6>
                      <p> {branchesdata.contact}</p>
                    </Card.Text>
                    <Card.Text>
                      <h6 className='mt-4'>Owned and Operated by:</h6>
                      <p> {branchesdata.company}</p>
                    </Card.Text>
                    
                  </Card.Body>
                  </Col>
                  <Col>
                  <Carousel>
                      <Carousel.Item interval={1000}>
                         <img
                         className="carousel-img pt-3"
                         src={CarouselImg}
                         alt="company-logo"
                     />      
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                  </Row>
                </Card>
              </Tab.Pane>
                ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      

  {/* Small Screen View */}
      <Row className="d-lg-none">
        <Col>
      <Accordion defaultActiveKey="0">
      {BranchesData.map((branchesdata) => (
      <Accordion.Item eventKey={branchesdata.id.toString()} key={branchesdata.id}>
        <Accordion.Header>{branchesdata.branch_name}</Accordion.Header>
        <Accordion.Body>
                <Card className="shadow-sm border-light-subtle p-3" style={{ maxWidth: "55rem" }}>
                  <Card.Header as="h4" className='bg-white'>{branchesdata.branch_name}</Card.Header>
                  <Row>
                  <Col>
                  <Card.Body>
                    <Card.Text>
                      <h6 className='mt-4'>Address:</h6>
                      <p> {branchesdata.address}</p>
                    </Card.Text>
                    <Card.Text>
                      <h6 className='mt-4'>Contact:</h6>
                      <p> {branchesdata.contact}</p>
                    </Card.Text>
                    <Card.Text>
                      <h6 className='mt-4'>Owned and Operated by:</h6>
                      <p> {branchesdata.company}</p>
                    </Card.Text>
                    
                  </Card.Body>
                  </Col>
                  <Col>
                  <Carousel>
                      <Carousel.Item interval={1000}>
                         <img
                         className="carousel-img pt-3"
                         src={CarouselImg}
                         alt="company-logo"
                     />      
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                  </Row>
                </Card>
        </Accordion.Body>
      </Accordion.Item>
       ))}
    </Accordion> 
    </Col>
    </Row>
    </Container>
    
                
  )
}

export default BranchSection