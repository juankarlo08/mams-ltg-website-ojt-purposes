import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const timelineData = [
  {
    date: "2014",
    title: "Marking the Beginning",
    description:
      "LT&G Credit Line took its first major step in the microlending industry with the opening of its inaugural branch in Legazpi City, Albay. This milestone marked the beginning of the company's mission to provide accessible and reliable financial solutions to individuals and businesses.",
  },
  {
    date: "2018",
    title: "First Franchise Branch",
    description:
      "LT&G Credit Line achieved a significant milestone by opening its first franchise branch, expanding its reach beyond company-owned locations. This marked the beginning of the brand’s growth through franchising, allowing more entrepreneurs to bring LT&G’s trusted financial services to their communities",
  },
  {
    date: "2019 - 2021",
    title: "49 Branches Nationwide",
    description:
      "LT&G Credit Line had rapidly expanded to 49 branches nationwide, solidifying its presence in the microlending industry. This growth reflected the company's commitment to providing accessible financial solutions to more communities across the country.",
  },
  {
    date: "2025",
    title: "Total of 100 Branches Expected by the End of Next Year",
    description:
      "LT&G Credit Line is on track to reach a total of 100 branches nationwide by the end of 2025, marking a new milestone in its expansion. This growth reflects the company’s dedication to making financial services more accessible to communities across the country.",
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
