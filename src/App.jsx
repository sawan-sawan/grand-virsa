import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import OurStory from './Components/OurStory';
import FeastSection from './Components/FeastSection';
import SpecialOffers from './Components/SpecialOffers';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import MenuPage from './Pages/MenuPage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* --- Home Page --- */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <OurStory />
              <FeastSection />
              <SpecialOffers />
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* --- Menu Page --- */}
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
