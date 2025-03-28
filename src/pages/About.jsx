import React from 'react'
import { motion } from "framer-motion"
import { pageAnimation } from '../animation';
import AboutHeaderSection from '../components/AboutComponent/AboutHeaderSection';
import CEOSection from '../components/AboutComponent/CEOSection';
import TimelineSection from '../components/AboutComponent/TimelineSection';
import TeamSection from '../components/AboutComponent/TeamSection';
import CustomerTestimonial from '../components/AboutComponent/CustomerTestimonial';
import FranchiseTestimonial from '../components/AboutComponent/FranchiseTestimonial';


const About = () => {
  return (
    <>
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
        <AboutHeaderSection />
        <CEOSection />
        <TimelineSection />
        <TeamSection />
        <CustomerTestimonial />
        <FranchiseTestimonial />


    </motion.div>
    </>
  )
}

export default About