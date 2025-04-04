import React from 'react'
import { motion } from "framer-motion"
import { pageAnimation } from '../animation';
import ContactFormSection from '../components/ContactComponent/ContactFormSection';
import FAQSection from '../components/ContactComponent/FAQSection';

const Contact = () => {
  return (
    <>
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
    <ContactFormSection />
    <FAQSection />
    


    </motion.div>
    </>
  )
}

export default Contact