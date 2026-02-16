import {useEffect, useState, React} from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PromotionalVideo from '../../video/promotional-video.mp4';
import VideoThumbnail from '../../img/video-thumbnail/video-thumbnail.png'
import BranchesData from '../../data/branchesdata'
import { useMotionValue, useMotionValueEvent, motion, animate } from 'framer-motion';
import { fadeIn, childVariant } from '../../data/animation';

const MotionContainer = motion(Container);

const HeroSection = () => {
  
  const clientCount = useMotionValue(0);
  const branchCount = useMotionValue(0);
  const [roundedClientCount, setRoundedClientCount] = useState(0);
  const [roundedBranchCount, setRoundedBranchCount] = useState(0);

  useEffect(() => {
    const clientAnim = animate(clientCount, 109805, { duration: 2, delay: 1 }); 
    const branchAnim = animate(branchCount, BranchesData.length, { duration: 2, delay: 1 });

    return () => {
      clientAnim.stop();
      branchAnim.stop();
    };
    }, []);

  useMotionValueEvent(clientCount, "change", (latest) => {
    setRoundedClientCount(Math.floor(latest));
  });

  useMotionValueEvent(branchCount, "change", (latest) => {
    setRoundedBranchCount(Math.floor(latest));
  });

  return (
    <MotionContainer fluid className='custom-x-padding py-5' variants={fadeIn} initial="hidden" whileInView="show">
      <Row className="d-flex align-items-center justify-content-center my-5">
        <Col lg={6} className='d-flex flex-column justify-content-center text-start'>
          <h1 className='text-info display-3 '>Franchise the Future<br /> of Microlending</h1>  
          <p className='fs-5 fw-light text-muted mt-3'>LT&G Credit Line — The first microlending franchise in the Philippines, providing accessible loans to empower your future. Join us in transforming lives and building a brighter financial future together.</p>
          <div className='mt-4'>
            <Button variant='danger' className='me-2' as={Link} to="/franchising">Learn More</Button>
            <Button variant='secondary' as={Link} to="/contact">Join Now</Button>
          </div>
          <Row className='mt-5 gap-4'>
            <Col className='border-start ps-4'>
              <motion.h1 className=" mt-3">{roundedClientCount.toLocaleString()}</motion.h1>
              <p className='text-muted'>Satisfied clients</p>
            </Col>
            <Col className='border-start ps-4'> 
              <h1 className="mt-3">{roundedBranchCount.toLocaleString()}</h1>
              <p className='text-muted' >Branches nationwide</p>
            </Col>
          </Row >
          <Row className='my-3'>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 px-3 py-2 ">
              <span className="text-muted small">4.8 / 5.0</span>
              <div className="d-flex">
                {Array(5).fill().map((_, idx) => (
                  <span key={idx} className="text-warning">&#9733;</span>
                ))}
              </div>
              <span className="text-muted small">Trusted by 20+ Franchisees</span>
            </div>
          </Row>
        </Col>
        <Col lg={6} className='d-flex align-items-center'>
          <video width="100%" height="auto" controls poster={VideoThumbnail} className='rounded-3 shadow'>
            <source src={PromotionalVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </MotionContainer>
  )
}

export default HeroSection