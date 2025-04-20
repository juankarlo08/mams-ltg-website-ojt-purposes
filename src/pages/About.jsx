import React from 'react'
import AboutHeaderSection from '../components/AboutComponent/AboutHeaderSection';
import CEOSection from '../components/AboutComponent/CEOSection';
import TimelineSection from '../components/AboutComponent/TimelineSection';
import TeamSection from '../components/AboutComponent/TeamSection';
import MissionVisionSection from '../components/AboutComponent/MissionVisionSection';


const About = () => {
  return (
    <>

        <AboutHeaderSection />
        <MissionVisionSection />
        <CEOSection />
        <TimelineSection />
        <TeamSection />

    </>
  )
}

export default About