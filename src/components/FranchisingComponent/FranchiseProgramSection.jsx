import React from 'react';
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from 'framer-motion';

// Styling & Assets
import './FranchiseProgramSection.css';
import PreOpeningSupport from '../../img/pre-opening.png';
import OpeningSupport from '../../img/opening.png';
import ContinuingSupport from '../../img/continuing.png';
import MarketingSupport from '../../img/marketing.png';
import { fadeIn, childVariant } from '../../data/animation';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);
const MotionCard = motion(Card);

const FranchiseProgramSection = () => {
  const programs = [
    {
      title: "Pre-Opening Support",
      img: PreOpeningSupport,
      alt: "Pre-opening microlending franchise support services",
      items: [
        "Franchise Area Mapping & Survey",
        "Staff Recruitment Activities",
        "Staff Training",
        "Branch Office Site Evaluation",
        "Certificate Course in Microlending",
        "Business Registration Assistance",
        "Office Refurbishment"
      ]
    },
    {
      title: "Opening Support",
      img: OpeningSupport,
      alt: "Opening day support for new franchise branches",
      items: [
        "Detailed Area Mapping",
        "Guided Business Roll Out",
        "Systems Installation and Orientation",
        "Branch Blessing on Opening Day"
      ]
    },
    {
      title: "Continuing Support",
      img: ContinuingSupport,
      alt: "Ongoing operational and IT support for franchisees",
      items: [
        "Periodic Branch Audit",
        "Regular Area Supervisor Assistance",
        "Daily IT Monitoring And Support",
        "Regular HR Assistance and Guidance",
        "Semi-Monthly Branch Evaluations"
      ]
    },
    {
      title: "Marketing Support",
      img: MarketingSupport,
      alt: "Marketing and social media advertising for franchise success",
      items: [
        "Opening Week Marketing Drive",
        "Social Media Advertising",
        "Flyer Layout and Design",
        "Head Office Marketing Support"
      ]
    }
  ];

  return (
    <MotionContainer 
      fluid 
      className="custom-x-padding py-5 bg-light"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Row className='mt-5 justify-content-center'>
        <Col className='mb-5' xxl={10}>
          <h2 className="display-4 text-center fw-light text-dark">
            Franchise Programs
          </h2>
        </Col>
      </Row>

      <Row className='my-5 g-4'>
        {programs.map((program, index) => (
          <MotionCol lg={3} md={6} className="d-flex" variants={childVariant} key={index}>
            <MotionCard 
              className="mb-4 p-3 shadow-sm border-0 rounded-4 flex-fill bg-info text-light" 
              whileHover={{ y: -10 }}
            >
              <div className='d-flex justify-content-center mt-3'>
                <div className='franchise-program-header'>
                  <Image 
                    src={program.img}
                    className='border border-4 rounded-circle border-light p-2 bg-danger shadow'
                    style={{ height: "100px", width: "100px", objectFit: "contain" }}
                    alt={program.alt}
                  />
                </div>
              </div>
              <Card.Body className="d-flex flex-column">
                <h3 className='h5 mb-4 mt-4 text-center fw-bold'>
                  {program.title}
                </h3>
                <hr className='opacity-50'/>
                <ul className="list-unstyled text-start mb-0">
                  {program.items.map((item, i) => (
                    <li key={i} className='mt-2 small d-flex align-items-start'>
                      <span className="me-2 text-danger">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </MotionCard>
          </MotionCol>
        ))}
      </Row>
    </MotionContainer>
  );
}

export default FranchiseProgramSection;