import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MarcoPic from '../../img/team-marc.jpg';
import CathPic from '../../img/team-cath.jpg';
import AgnesPic from '../../img/team-agnes.jpg';
import MarlonPic from '../../img/team-marlon.jpg';
import JohnPic from '../../img/team-john.jpg';
import ArnoldPic from '../../img/team-arnold.jpg';
import EmsPic from '../../img/team-ems.jpg';
import AlexPic from '../../img/team-blank.jpg';
import ShainlyPic from '../../img/team-blank.jpg';

const TeamSection = () => {
    const teamMembers = [
        { name: "Marco Antonio Soliman", role: "President/CEO", img: MarcoPic },
        { name: "Agnes Deniega", role: "General Manager", img: AgnesPic },
        { name: "Catherine Car", role: "Human Resource Head", img: CathPic },
        { name: "Marlon Thomas Marcellana", role: "Systems Administrator", img: MarlonPic },
        { name: "John Abejuro", role: "Training Head", img: JohnPic },
        { name: "Arnold Rioflorido", role: "Regional Head", img: ArnoldPic },
        { name: "Emelyn Marbella", role: "Finance Head", img: EmsPic },
        { name: "Alexis Daimler Esquejo", role: "Marketing Head", img: AlexPic },
        { name: "Shainly Love Nuñez", role: "Accounting Head", img: ShainlyPic },

      ];
      
  return (
    <Container fluid className='custom-x-padding py-5'>
        <Row className='justify-content-center'>
            <Col xxl={9}>
            <h1 className="display-4 fw-bold text-center">Our Team</h1>
            <p className="lead text-muted text-center">We have professional consultants in our franchise team. We are also always looking for new people to join our team. Our consultants know their stuff very well. Feel free to contact us for a quote.</p>
            </Col>
        </Row>
        <Row className="g-4 mt-5">
        {teamMembers.map((member, index) => (
          <Col key={index} md={4}>
            <Card className="text-center shadow border-0 py-5" style={{ background: "#fff", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={member.img}
                className="rounded-circle border mx-auto mt-4"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{member.name}</Card.Title>
                <Card.Text className="text-muted">{member.role}</Card.Text>
              </Card.Body>
          
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TeamSection