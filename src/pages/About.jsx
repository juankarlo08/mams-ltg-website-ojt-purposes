import React from 'react'
import { Helmet } from 'react-helmet-async';
import AboutHeaderSection from '../components/AboutComponent/AboutHeaderSection';
import CEOSection from '../components/AboutComponent/CEOSection';
import TimelineSection from '../components/AboutComponent/TimelineSection';
import TeamSection from '../components/AboutComponent/TeamSection';
import MissionVisionSection from '../components/AboutComponent/MissionVisionSection';
import CTASection from '../components/HomeComponent/CTASection';



const About = () => {
  return (
    <>
        <Helmet>
          <title>About Us | LT&G Credit Line</title>
          <meta
            name="description"
            content="Learn about LT&G Credit Line's mission, vision, and team. Discover our journey as a leading microlending franchise in the Philippines."
          />
        </Helmet>
        <AboutHeaderSection />
        <CEOSection />
        <TimelineSection />
        <MissionVisionSection />
        <TeamSection />
        <CTASection />

    </>
  )
}

export default About