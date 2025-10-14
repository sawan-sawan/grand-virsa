import React, { useState, useEffect } from 'react';
import './Navbar.css';

// 🎯 Updated icons for better matching
import { FaHome } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi'; // For "Our Story" (chef/restaurant story)
import { MdRestaurantMenu } from 'react-icons/md'; // For "Menu"
import { GiPartyPopper } from 'react-icons/gi'; // For "Catering"
import { IoIosMail } from 'react-icons/io'; // For "Contact"

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

  // --- Smooth scroll to section ---
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
          
          {/* --- Navigation Menu --- */}
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={(e) => handleScrollTo(e, 'home')}>
                <FaHome className="nav-icon" /> Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#our-story" className="nav-link" onClick={(e) => handleScrollTo(e, 'our-story')}>
                <GiChefToque className="nav-icon" /> Our Story
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
              <a href="#contact" className="nav-link contact-link" onClick={(e) => handleScrollTo(e, 'contact')}>
                <IoIosMail className="nav-icon" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
