import React, { useState }  from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";



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
    function igHandleClick() {
      window.open(
        "https://www.youtube.com/@mamsltgfranchisingcorp.9849"
      );
    }

  return (
      <Container fluid className='custom-x-padding py-3 bg-warning'>
      <Row className="d-flex flex-lg-row flex-column-reverse text-center align-items-center">
        <Col lg={6} >
        <div className="d-flex text-light justify-content-lg-start justify-content-center mt-3">
          <p>&copy; 2025 MAMS LT&G Franchising Corp. All rights reserved.</p>
        </div>
        </Col>
        <Col lg={6} >
        <div className="d-flex flex-row justify-content-lg-end justify-content-center">
        <h5>
        <FaFacebook 
          className="me-4 text-light "
          style={{cursor:"pointer"}}
          onClick={fbHandleClick}
        />
        </h5>
             <h5>
        <FaYoutube 
        className="me-4 text-light"
        style={{cursor:"pointer"}}
        onClick={ytHandleClick}/>
         </h5>
         <h5>
         <FaInstagram
        className="me-4 text-light"
        style={{cursor:"pointer"}}
        onClick={igHandleClick}/>
         </h5>
         </div>
        </Col>
      </Row>
      
</Container>
  )
}

export default FooterSection