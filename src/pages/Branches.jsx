import React from 'react'
import { motion } from "framer-motion"
import { pageAnimation } from '../animation';
import BranchSection from '../components/BranchesComponent/BranchSection';
import MapSection from '../components/BranchesComponent/MapSection';

const Branches = () => {
  return (
    <>
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
    <MapSection />
    <BranchSection />


    </motion.div>
    </>
  )
}

export default Branches