import React from 'react'
import { motion } from "framer-motion"
import { pageAnimation } from '../animation';
import HeroSection from '../components/HomeComponent/HeroSection'
import FeatureListSection from '../components/HomeComponent/FeatureListSection'
import StatsSection from '../components/HomeComponent/StatsSection'
import TestimonialSection from '../components/HomeComponent/TestimonialSection'
import NewsAndEventSection from '../components/HomeComponent/NewsAndEventSection'
import CTASection from '../components/HomeComponent/CTASection'

const Home = () => {
  return (
    <>
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
    <HeroSection />
    <FeatureListSection />
    <StatsSection />
    <TestimonialSection />
    <NewsAndEventSection />
    <CTASection />
  

    </motion.div>
    </>
  )
}

export default Home