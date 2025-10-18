import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import OurStory from './Components/OurStory';
import FeastSection from './Components/FeastSection';
import SpecialOffers from './Components/SpecialOffers';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

import MenuPage from './Pages/MenuPage';
import CateringSliderCustom from './Components/CateringSliderCustom';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* --- Home Page --- */}
        <Route
          path="/"
          element={
            <>
            <ErrorPage />
              {/*
  <HeroSection />
  <OurStory />
  <FeastSection />
  <SpecialOffers />
  <CateringSliderCustom />
  <ContactSection />
*/}

            </>
          }
        />

        {/* --- Menu Page --- */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/catering" element={<CateringSliderCustom />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/contact" element={<ContactSection />} />


      </Routes>
     {/* <Footer /> */}
    </Router>
  );
}

export default App;
