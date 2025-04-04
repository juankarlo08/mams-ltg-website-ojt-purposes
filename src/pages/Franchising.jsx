import React from 'react';
import { motion } from "framer-motion"
import { pageAnimation } from '../animation';
import PricingSection from '../components/FranchisingComponent/PricingSection';
import FranchiseProgramSection from '../components/FranchisingComponent/FranchiseProgramSection';

const Franchising = () => {
  return (
    <>
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
    <PricingSection />
    <FranchiseProgramSection />
    


    </motion.div>
    </>
  )
}

export default Franchising