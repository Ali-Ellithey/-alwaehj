import React from 'react'
import AboutHome from '../Components/About/AboutHome.jsx';
import AboutContent from '../Components/About/AboutContent.jsx';
import BusinessSolutions from '../Components/Home/BusinessSolutions.jsx';
import TellUs from '../Components/About/TellUs.jsx'

export const AboutPages = () => {
  return (
    <div>
        <AboutHome/>
        <AboutContent />
        <BusinessSolutions />
        <TellUs/>

    </div>
  )
}

export default AboutPages
