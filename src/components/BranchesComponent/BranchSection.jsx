import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const BranchSection = () => {
  return (
    <Container fluid className="custom-x-padding py-5">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="link1">
        <Row>
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