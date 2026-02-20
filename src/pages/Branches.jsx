import React from 'react'
import { Helmet } from 'react-helmet-async';
import BranchSection from '../components/BranchesComponent/BranchSection';
import MapSection from '../components/BranchesComponent/MapSection';

const Branches = () => {
  return (
    <>
      <Helmet>
        <title>Branches | LT&G Credit Line</title>
        <meta
          name="description"
          content="Explore LT&G Credit Line's branch locations and find the nearest one to you."
        />
      </Helmet>

      <MapSection />
      <BranchSection />
    </>
  )
}

export default Branches