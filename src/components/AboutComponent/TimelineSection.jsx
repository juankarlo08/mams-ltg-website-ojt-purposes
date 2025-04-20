import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const timelineData = [
  {
    date: "2014",
    title: "Marking the Beginning",
    description:
      "LT&G Credit Line launched its microlending operations by opening its first branch in Legazpi City, Albay, signaling its commitment to offering accessible financial solutions.",
  },
  {
    date: "2018",
    title: "First Franchise Branch",
    description:
      "LT&G Credit Line reached a key milestone by opening its first franchise branch, initiating the brand’s expansion through franchising to extend its financial services to more communities.",
  },
  {
    date: "2019 - 2021",
    title: "49 Branches Nationwide",
    description:
      "LT&G Credit Line rapidly grew to 49 branches nationwide, reinforcing its presence in the microlending industry and its commitment to serving more communities with accessible financial solutions.",
  },
  {
    date: "2025",
    title: "Total of 100 Branches Expected by the End of Next Year",
    description:
      "LT&G Credit Line is on track to reach 100 branches nationwide by the end of 2025, highlighting its ongoing commitment to expanding access to financial services across the country.",
  },
];

const TimelineSection = () => {
    
  return (
    <Container fluid className="custom-x-padding py-5">
    <Row className="my-5">
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
