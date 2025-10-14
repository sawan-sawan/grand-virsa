// src/components/Footer.js

import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo and Social Icons */}
        <div className="footer-col about-col">
          <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384695/logo_iogna6.png" alt="Grand Virsa Logo" className="footer-logo" />
          <p className="footer-about">
            Experience the pinnacle of luxury and tradition. Grand Virsa offers an unforgettable ambiance for your most cherished moments.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#catering">Catering</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col contact-col">
          <h3 className="footer-col-title">Contact Us</h3>
          <p>NH 44 , GT Road , Phillaur , Punjab</p>
          <p>grandvirsa@gmail.com</p>
          <p>+91 8078-000001</p>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div className="footer-col newsletter-col">
          <h3 className="footer-col-title">Subscribe</h3>
          <p>Get the latest updates and special offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Grand Virsa. All Rights Reserved. Designed with ❤️.</p>
      </div>
    </footer>
  );
};

export default Footer;