import React, { useState, useEffect } from 'react';
import './Navbar.css';

// --- Icons ---
import { FaHome, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GiChefToque, GiPartyPopper } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Body scroll lock logic
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll logic
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 90;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }

    // Close menu after clicking a link
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      {/* Overlay is now part of the nav-menu itself for a cleaner effect */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={(e) => handleScrollTo(e, 'home')}>
            <img 
              src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384695/logo_iogna6.png" 
              alt="Grand Virsa Logo" 
            />
          </a>

          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
          
          {/* --- Navigation Menu (MODERNIZED) --- */}
          <div className={`nav-menu-wrapper ${isOpen ? 'open' : ''}`}>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={(e) => handleScrollTo(e, 'home')}>
                  <FaHome className="nav-icon" /> Home
                </a>
              </li>
         
              <li className="nav-item">
                <a href="#menu" className="nav-link" onClick={(e) => handleScrollTo(e, 'menu')}>
                  <MdRestaurantMenu className="nav-icon" /> Menu
                </a>
              </li>
              <li className="nav-item">
                <a href="#catering" className="nav-link" onClick={(e) => handleScrollTo(e, 'catering')}>
                  <GiPartyPopper className="nav-icon" /> Catering
                </a>
              </li>
                   <li className="nav-item">
                <a href="#our-story" className="nav-link" onClick={(e) => handleScrollTo(e, 'our-story')}>
                  <GiChefToque className="nav-icon" /> Our Story
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={(e) => handleScrollTo(e, 'contact')}>
                  <IoIosMail className="nav-icon" /> Contact
                </a>
              </li>
            </ul>

            {/* --- NEW: CTA Button and Social Links --- */}
            <div className="nav-extras">
              <button className="nav-cta-button">Book a Table</button>
              <div className="nav-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;