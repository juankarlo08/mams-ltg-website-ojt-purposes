import React from 'react'
import HeroSection from '../components/HomeComponent/HeroSection'
import FeatureListSection from '../components/HomeComponent/FeatureListSection'
import TestimonialSection from '../components/HomeComponent/TestimonialSection'
import NewsAndEventSection from '../components/HomeComponent/NewsAndEventSection'
import CTASection from '../components/HomeComponent/CTASection'
import CustomerTestimonial from '../components/HomeComponent/CustomerTestimonial'
import LogoClouds from '../components/HomeComponent/LogoClouds'


const Home = () => {
  return (
    <>
    <HeroSection />
    <LogoClouds />
    <FeatureListSection />
    <CustomerTestimonial />
    <TestimonialSection />
  <NewsAndEventSection />
    <CTASection />

    </>
  )
}

export default Home