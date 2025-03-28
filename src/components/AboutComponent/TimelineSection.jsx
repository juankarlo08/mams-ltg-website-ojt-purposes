import React from 'react'
import './TimelineSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const timelineData = [
  {
    date: "Aug 2021",
    title: "Founded company",
    description:
      "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
  },
  {
    date: "Dec 2021",
    title: "Secured $65m in funding",
    description:
      "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
  },
  {
    date: "Feb 2022",
    title: "Released beta",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
  },
  {
    date: "Dec 2022",
    title: "Global launch of product",
    description:
      "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
  },
];

const TimelineSection = () => {
    
  return (
    <Container fluid className="custom-x-padding py-5 bg-light">
    <Row className="align-items-center my-5">
      {timelineData.map((item, index) => (
        <Col key={index} md={3}>
          {/* Date with Horizontal Line */}
          <div className="d-flex align-items-center">
            <span className="text-danger fw-bold small">• {item.date}</span>
            {index !== timelineData.length - 1 && (
              <div className="flex-grow-1 ms-2 border-bottom"></div>
            )}
          </div>

          {/* Title & Description */}
          <h5 className="fw-bold mt-2">{item.title}</h5>
          <p className="text-muted">{item.description}</p>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default TimelineSection
