
import React from 'react';
import './ContactSection.css';
import { FaEnvelope, FaGlobe, FaPhoneAlt } from 'react-icons/fa'; 

const ContactSection = () => {
  return (
    <section id='contact' className="contact-section">
      <div className="contact-image-column">
      </div>

      <div className="contact-content-column">
        <div className="contact-dots">
          {[...Array(9)].map((_, i) => <span key={i}></span>)}
        </div>
        <div className="contact-accent-squares"></div>

        <h1 className="contact-title">Join Us Today!</h1>
        <p className="contact-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        
        <ul className="contact-list">
          <li className="contact-item">
            <span className="contact-icon"><FaEnvelope /></span>
            <span>grandvirsa@gmail.com</span>
          </li>
          <li className="contact-item">
            <span className="contact-icon"><FaGlobe /></span>
            <span>www.grandvirsa.com</span>
          </li>
          <li className="contact-item">
            <span className="contact-icon"><FaPhoneAlt /></span>
            <span>+123-456-7890</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;