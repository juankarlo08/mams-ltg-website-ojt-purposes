import React, { useState }  from "react";
// import './FooterCont.css';
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
    const [expanded, setExpanded] = useState(false);

  function fbHandleClick() {
    window.open(
      "https://www.facebook.com/mamsltg/?hc_ref=ARS7Zvhy22p9VHz3CguJwLun_Df5Z7YWrsav-j32x_HmLtk5FPQuEYIfGw8tdG7asUE&fref=nf&__tn__=kC-R"
    );
  }
    function ytHandleClick() {
      window.open(
        "https://www.youtube.com/@mamsltgfranchisingcorp.9849"
      );
    }

  return (
      <Container fluid className='custom-x-padding pt-5'>
          <Row className='pb-5 mt-5'>
           <Col md={8} sm={12}  >
           <div className="d-flex flex-column align-items-center align-items-md-start"> 

           
           <Navbar.Brand className='pb-4 '>
              <img
              src={Logo}
              width={"200px"}
              height={"auto"}
              className="d-inline-block align-top"
              alt="LT&G Logo"
              />
              </Navbar.Brand>
              <div className='mt-4' > Empowering small loans,<br /> 
              creating big opportunities.</div>
              <Nav className="mt-4 mb-5">
           <FontAwesomeIcon
              className="facebook border-icon last me-2"
              icon={faFacebook}
              onClick={fbHandleClick}
              style={{ cursor: "pointer" }}
            />
            <FontAwesomeIcon
              className="youtube border-icon last"
              icon={faYoutube}
              onClick={ytHandleClick}
              style={{ cursor: "pointer" }}
            />
            </Nav>
            </div>
            </Col>
            

            <Col className="d-flex justify-content-center">
              <Nav className="d-flex flex-column ">
                <h5>Company</h5>
              <Nav.Link className="text-dark px-0" href="./about">About Us</Nav.Link>  
              <Nav.Link className="text-dark px-0" href="./contact">Blog</Nav.Link>  
              <Nav.Link className="text-dark px-0" href="./faq">Contact Us</Nav.Link>   
              <Nav.Link className="text-dark px-0" href="./about">Branches</Nav.Link>
              </Nav>    
              </Col>
              <Col className="d-flex justify-content-center">   
              <Nav className="d-flex flex-column">
                <h5>Support </h5>
              <Nav.Link className="text-dark px-0" href="./home">Help Center</Nav.Link>
              <Nav.Link className="text-dark px-0" href="./about">Terms of Service</Nav.Link>  
              <Nav.Link className="text-dark px-0" href="./contact">Legal</Nav.Link>  
              <Nav.Link className="text-dark px-0" href="./faq">Privacy Policy</Nav.Link>
              </Nav>
            </Col>  
          </Row>
      <Row >
        <hr/>
        <div className="d-flex justify-content-center justify-content-md-start">
          <p>&copy; 2024 MAMS LT&G Franchising Corp. All rights reserved.</p>
        </div>
      </Row>
</Container>
  )
}

export default FooterSection