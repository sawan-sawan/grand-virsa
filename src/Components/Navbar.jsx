import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384695/logo_iogna6.png"
              alt="Grand Virsa Logo"
            />
          </Link>

          {/* ===== NEW: DESKTOP MENU ===== */}
          {/* Yeh menu sirf desktop par dikhega */}
          <ul className="nav-menu-desktop">
            <li className="nav-item-desktop">
              <Link
                to="/"
                className="nav-link-desktop"
               
              >
                Home
              </Link>
            </li>
            <li className="nav-item-desktop">
              <Link
                to="/ourstory"
                className="nav-link-desktop"
               
              >
                Our Story
              </Link>
            </li>
            <li className="nav-item-desktop">
              <Link
                to="/menu"
                className="nav-link-desktop"
              >
                Menu
              </Link>
            </li>
            <li className="nav-item-desktop">
              <Link
                to="/catering"
                className="nav-link-desktop"
               
              >
                Catering
              </Link>
            </li>
            <li className="nav-item-desktop">
              <Link
                to="/contact"
                className="nav-link-desktop contact-link-desktop"
               
              >
                Contact
              </Link>
            </li>
          </ul>


          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>

          {/* ===== MOBILE MENU ===== */}
          {/* Yeh full-screen menu sirf mobile par toggle hoga */}
          <div className={`nav-menu-wrapper ${isOpen ? 'open' : ''}`}>
            <ul className="nav-menu-mobile">
              <li className="nav-item-mobile">
                <Link to="/" className="nav-link-mobile" onClick={() => isOpen && toggleMenu()}>
                  <FaHome className="nav-icon" /> Home
                </Link>
              </li>

              <li className="nav-item-mobile">
                <Link to="/menu" className="nav-link-mobile" onClick={() => isOpen && toggleMenu()}>
                  <MdRestaurantMenu className="nav-icon" /> Menu
                </Link>
              </li>

              <li className="nav-item-mobile">
                <Link to="/catering" className="nav-link-mobile" onClick={() => isOpen && toggleMenu()}>
                  <GiPartyPopper className="nav-icon" /> Catering
                </Link>
              </li>

              <li className="nav-item-mobile">
                <Link to="/our-story" className="nav-link-mobile" onClick={() => isOpen && toggleMenu()}>
                  <GiChefToque className="nav-icon" /> Our Story
                </Link>
              </li>

              <li className="nav-item-mobile">
                <Link to="/contact" className="nav-link-mobile" onClick={() => isOpen && toggleMenu()}>
                  <IoIosMail className="nav-icon" /> Contact
                </Link>
              </li>
            </ul>

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