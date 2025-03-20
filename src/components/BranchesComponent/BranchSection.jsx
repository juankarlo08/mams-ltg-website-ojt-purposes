import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, FormControl} from "react-bootstrap";
import SearchImg from '../../assets/search.png';


const BranchSection = () => {
  return (
    <Container fluid className="custom-x-padding py-5">
      <Row className='bg-light p-4 align-items-center'>
        <Col md={6}className='d-flex justify-content-center justify-content-md-start'>
            <Form>
              <InputGroup >
                <InputGroup.Text className='bg-white border-end-0 ' >
                  <img
                    src={SearchImg}
                    alt="Search"
                    width="20"
                    height="20"
                  />
                </InputGroup.Text>
                <FormControl type="text" placeholder="Search..." className='border-start-0 py-2 pe-5' />
              </InputGroup>
            </Form>
        </Col>
        <Col md={6} className='d-flex justify-content-center justify-content-md-start'>
        <div className='me-3 mt-2'>
          <p>Filter by:</p>
        </div>
        <div>
          <Form.Select className='py-2'>
            <option>All</option>
            <option>Luzon</option>
            <option>Visayas</option>
            <option>Mindanao</option>
            <option>Metro Manila</option>
          </Form.Select>
          </div>
        </Col>
      </Row>


      <Tab.Container id="list-group-tabs-example" defaultActiveKey="link1">
        <Row className='mt-5'>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action eventKey="link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action eventKey="link2">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="link1">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Placeholder" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="link2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Placeholder" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default BranchSection