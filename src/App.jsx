import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import OurStory from './Components/OurStory'
import FeastSection from './Components/FeastSection'
import MenuHighlights from './Components/SpecialOffers'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CateringSlider from './Components/CateringSlider'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'
function App() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <OurStory />
      <FeastSection />
      <MenuHighlights />
      <CateringSlider />
      <ContactSection />
      <Footer />

    </>
  )
}

export default App
