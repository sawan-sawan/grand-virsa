
import React from 'react';
import './FeastSection.css';

const FeastSection = () => {
  return (
    <section className="feast-section">
      <div className="feast-content">
        <h3 className="feast-subtitle">Exquisite cuisine</h3>
        <h2 className="feast-title">FEAST FOR YOUR SENSES</h2>
        <div className="feast-divider">
          <span className="feast-line"></span>
          
          <img 
            src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384699/spoonicon_icpoms.png" 
            alt="Feast Icon" 
            className="feast-icon-img" 
          />

          <span className="feast-line"></span>
        </div>
      </div>
    </section>
  );
};

export default FeastSection;