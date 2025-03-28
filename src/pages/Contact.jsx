import React from 'react'
import { motion } from "framer-motion"
import { pageAnimation } from '../animation';
import ContactFormSection from '../components/ContactComponent/ContactFormSection';
import ContactSection from '../components/ContactComponent/ContactSection'

const Contact = () => {
  return (
    <>
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
    <ContactSection />
    <ContactFormSection />
    


    </motion.div>
    </>
  )
}

export default Contact