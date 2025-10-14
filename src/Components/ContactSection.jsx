
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
  Grand Virsa welcomes you to be a part of our vibrant family! Located on NH 44, GT Road, Phillaur, Punjab, our heritage-inspired haveli offers a unique blend of tradition, comfort, and luxury. Whether you wish to collaborate, host an event, or simply experience Punjabi hospitality at its finest, we invite you to join hands with us. Let's create timeless memories together at Grand Virsa.
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
            <span>+91 8078-000001</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;