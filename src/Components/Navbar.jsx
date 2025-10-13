// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaHome, FaInfoCircle, FaConciergeBell, FaImages, FaEnvelope } from 'react-icons/fa';
// react-scroll का Link यहाँ से हटा दिया गया है

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 1. यह हमारा नया कस्टम स्क्रॉल फंक्शन है ---
  const handleScrollTo = (e, targetId) => {
    e.preventDefault(); // डिफ़ॉल्ट JUMP को रोकता है
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 90; // आपके Navbar की हाइट
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // स्मूथ स्क्रॉल
      });
    }

    // मोबाइल मेनू को बंद करने के लिए
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384695/logo_iogna6.png" alt="Grand Virsa Logo" />
          </a>

          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
          
          {/* --- 2. यहाँ <a> टैग्स का इस्तेमाल किया गया है --- */}
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={(e) => handleScrollTo(e, 'home')}>
                <FaHome className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#our-story" className="nav-link" onClick={(e) => handleScrollTo(e, 'our-story')}>
                <FaInfoCircle className="nav-icon" /> Our Story
              </a>
            </li>
            <li className="nav-item">
              <a href="#menu" className="nav-link" onClick={(e) => handleScrollTo(e, 'menu')}>
                <FaConciergeBell className="nav-icon" /> Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#catering" className="nav-link" onClick={(e) => handleScrollTo(e, 'catering')}>
                <FaImages className="nav-icon" /> Catering
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link contact-link" onClick={(e) => handleScrollTo(e, 'contact')}>
                <FaEnvelope className="nav-icon" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;