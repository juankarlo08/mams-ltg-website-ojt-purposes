import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MarcoPic from '../../img/team-marc1.jpg';
import CathPic from '../../img/team-cath1.jpg';
import AgnesPic from '../../img/team-agnes1.jpg';
import MarlonPic from '../../img/team-marlon1.jpg';
import ArnoldPic from '../../img/team-arnold1.jpg';
import EmsPic from '../../img/team-ems1.jpg';
import AlexPic from '../../img/team-blank1.jpg';
import ShainlyPic from '../../img/team-blank1.jpg';
import FretzPic from '../../img/team-fretz1.jpg'

const TeamSection = () => {
    const teamMembers = [
        { name: "Marco Antonio Soliman", role: "President/CEO", img: MarcoPic },
        { name: "Agnes Deniega", role: "General Manager", img: AgnesPic },
        { name: "Catherine Car", role: "Human Resource Head", img: CathPic },
        { name: "Marlon Thomas Marcellana", role: "Systems Administrator", img: MarlonPic },
        { name: "Arnold Rioflorido", role: "Regional Head", img: ArnoldPic },
        { name: "Emelyn Marbella", role: "Finance Head", img: EmsPic },
        { name: "Alexis Daimler Esquejo", role: "Franchise Marketing Officer", img: AlexPic },
        { name: "Shainly Love Nuñez", role: "Accounting Head", img: ShainlyPic },
        { name: "Frederick Ildefonso", role: "Debt Recovery Specialist", img: FretzPic },

      ];
      
  return (
    <Container fluid className='custom-x-padding py-5'>
        <Row className='justify-content-center mt-5'>
            <Col xxl={9}>
            <h1 className="display-4 fw-bold text-center">Our Team</h1>
            <p className="lead text-muted text-center">We have professional consultants in our franchise team. We are also always looking for new people to join our team. Our consultants know their stuff very well. Feel free to contact us for a quote.</p>
            </Col>
        </Row>
        <Row className="g-4 my-5">
        {teamMembers.map((member, index) => (
          <Col key={index} xxl={4} lg={6} md={12} className='mb-5'>

          <Card className="text-white border-0 mx-auto rounded-4 " style={{ maxWidth: "380px", height: "auto", objectFit: "cover", overflow: "hidden" }}>
                <Card.Img src={member.img} className="img-fluid" alt="Card image" />
                <Card.ImgOverlay className='d-flex flex-column justify-content-end p-4'>
                    <Card.Title className="fw-bold">{member.name}</Card.Title>
                    <Card.Text className="text-secondary">{member.role}</Card.Text>
                </Card.ImgOverlay>
              </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TeamSection