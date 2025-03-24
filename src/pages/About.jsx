import React from 'react'
import { motion } from "framer-motion"
import { pageAnimation } from '../animation';
import AboutHeaderSection from '../components/AboutComponent/AboutHeaderSection';
import CEOSection from '../components/AboutComponent/CEOSection';


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


    </motion.div>
    </>
  )
}

export default About